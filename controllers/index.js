const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const resultsRoutes = require('./results-routes.js')
const searchRoutes = require('./search-routes.js');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/results', resultsRoutes);
router.use('/search', searchRoutes);
router.use('/api', apiRoutes);

module.exports = router;
