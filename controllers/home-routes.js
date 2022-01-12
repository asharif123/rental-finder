const router = require('express').Router();

//define login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/search');
        return;
    }
    res.render('login')
})

//define results
router.get('/results', (req, res) => {
    if (!req?.session?.loggedIn) res.redirect("/login");


    res.render('results', {
        images: [
        "https://cdn-static.roomster.com/pics/Original/L-25529592-0885620b3bf64482815cc17fefd2e60c.jpg",
        "https://cdn-static.roomster.com/pics/Original/L-25529592-64a44644af1d41fc95a0cbbc8a118623.jpg",
        "https://cdn-static.roomster.com/pics/Original/L-25529592-8c27f80bc4aa4173bf63820fdba5f5a6.jpg",
        "https://cdn-static.roomster.com/pics/Original/L-25529592-08abf660f99f4c0ea19c65fabc30cfd1.jpg",
        "https://cdn-static.roomster.com/pics/Original/L-25529592-e9de17f36ef94b54bbca9f57ff99e6e3.jpg",
        "https://cdn-static.roomster.com/pics/Original/L-25529592-be5fe4864eec463e8d7e8a9df25ff58e.jpg"
    ], address: "Huntington Beach, CA, USA",
    monthly_rate: 900
    })
})

module.exports = router;