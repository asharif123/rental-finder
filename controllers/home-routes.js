const router = require('express').Router();

//define homepage
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/search');
        return;
    }
    res.render('login')
})
// defin login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/search');
        return;
    }
    res.render('login')
})
module.exports = router;