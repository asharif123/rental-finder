const router = require('express').Router();

router.get('/search', (req, res) => {
    res.render('main', {
      loggedIn: req.session.loggedIn,
    })
})

//define login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
})

module.exports = router;