const Results = require('../models/Results');
const router = require('express').Router();
const withAuth = require('../utils/auth.js');

// Results end point    
router.get("/", withAuth, async (req, res) => {
    const metaResultsData = await Results.findAll({
        limit: 15,
        order: [['updatedAt', 'DESC']]
    }).catch((err)  => {
        res.json(err);
    });
    const result = metaResultsData.map((results) => results.get({ plain: true}));
    res.render("results", { result, loggedIn: req.session.loggedIn } );
});

router.get("/:id", async (req, res) => {
    try {
        const property = await Results.findByPk(req.params.id);
        res.render("results", { property, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;