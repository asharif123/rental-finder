const Results = require('../models/Results');
const router = require('express').Router();
const withAuth = require('../utils/auth.js');
// const axios = require("axios");

// Results end point    
router.get("/", withAuth, async (req, res) => {
    const metaResultsData = await Results.findAll({
        limit: 10,
    }).catch((err)  => {
        res.json(err);
    });
    const data = metaResultsData.map((results) => results.get({ plain: true}));
    res.render("results", { data } );
})

module.exports = router;