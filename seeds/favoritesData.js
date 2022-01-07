const { Favorites } = require('../models');
const listing = require('../seeds/listings.json')

const favoritesData = [
    {
    id: 1,
    listing: JSON.stringify(listing)
    },
    {
    id: 2,
    listing:JSON.stringify(listing),

    },
    {
     id: 3,
     listing: JSON.stringify(listing),
    }
];

const seedFavorites = () => User.bulkCreate(favoritesData);

module.exports = seedFavorites;