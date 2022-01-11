const { Favorites } = require('../models');
const listing = require('../seeds/listing.json')
const favoritesData = [
    {
    id: 1,
    listing: JSON.stringify(listing),
    user_id: 1
    },
    {
    id: 2,
    listing:JSON.stringify(listing),
    user_id: 2
    },
    {
     id: 3,
     listing: JSON.stringify(listing),
     user_id: 3
    },
    {
    id: 4,
    listing: JSON.stringify(listing),
    user_id: 4
    },
    {
    id: 5,
    listing: JSON.stringify(listing),
    user_id: 5
    },
    {
    id: 6,
    listing: JSON.stringify(listing),
    user_id: 6
    },
];
const seedFavorites = () => Favorites.bulkCreate(favoritesData);

module.exports = seedFavorites;