const Searches = require('../models/Searches');
const router = require('express').Router();
const withAuth = require('../utils/auth.js');
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
      res.status(200).json(searchData);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

module.exports = router;