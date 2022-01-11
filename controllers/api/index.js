const router = require('express').Router();
const userRoutes = require('./user-routes');
const favoritesRoutes = require('./favorites_routes');
const searchRoutes = require('./search_routes');


router.use('/users', userRoutes);
router.use('/favorites', favoritesRoutes);
router.use('/searches', searchRoutes);


module.exports = router;
