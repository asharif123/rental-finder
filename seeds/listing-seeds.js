const { Favorites } = require('../models');
const listing = require('../seeds/listing.json')
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
    },
    {
    id: 4,
    listing: JSON.stringify(listing),
    },
    {
    id: 5,
    listing: JSON.stringify(listing),
    },
    {
    id: 6,
    listing: JSON.stringify(listing),
     },
];
const seedFavorites = () => Favorites.bulkCreate(favoritesData);

module.exports = seedFavorites;