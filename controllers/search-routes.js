const Searches = require('../models/Searches');
const router = require('express').Router();
const withAuth = require('../utils/auth.js');
//axios - library for making http requests in node env (serverside)
const axios = require("axios");
// Search Form Routes
router.get("/", withAuth, async (req, res) => {
    // res.render("search-form");
    const metaResultsData = await Searches.findAll().catch((err) => {
      res.json(err);
    });
    const previousSearches = metaResultsData.map((search) => search.get({ plain: true }));
    res.render("search-form", { previousSearches, loggedIn: req.session.loggedIn });
});

router.post("/", withAuth, async (req, res) => {
    try {
      const searchData = await Searches.create({
        city_name: req.body.city_name,
        state_name: req.body.state_name,
        minimum_budget: req.body.minimum_budget,
        maximum_budget: req.body.maximum_budget,
      });

      //hit up google api to geocode

    const GoogleAPIURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + req.body.city_name + "," + req.body.state_name + "&key=" + process.env.googleAPIKEY;
    // console.log(GoogleAPIURL);
    const response = await axios.get(GoogleAPIURL)
    const roomsterAPI = 'https://www.roomster.com/api/search?search_params.page_number=1&search_params.service_type=HaveShare&search_params.sort=LastActivity&search_params.budget.min=' + req.body.minimum_budget + 
                            '&search_params.budget.max=' + req.body.maximum_budget +
                            '&search_params.age.min=18&search_params.age.max=99&search_params.geo.lat_sw=' +
                            response.data["results"][0]["geometry"]["bounds"]["southwest"].lat +
                            "&search_params.geo.lng_sw=" +
                            response.data["results"][0]["geometry"]["bounds"]["southwest"].lng +
                            "&search_params.geo.lat_ne=" +
                            response.data["results"][0]["geometry"]["bounds"]["northeast"].lat +
                            "&search_params.geo.lng_ne=" +
                            response.data["results"][0]["geometry"]["bounds"]["northeast"].lng +
                            "&search_params.include_total_count=true&search_params.is_cache_loaded=false";
    const rooms = await axios.get(roomsterAPI)
    console.log("**************************", rooms["data"]["items"])

    res.render('results', {
       rooms: rooms["data"]["items"]
    });
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

module.exports = router;