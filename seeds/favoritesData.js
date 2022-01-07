const { Favorites } = require('../models');
const favRooms = require('../seeds/listings.json')

const favoritesData = [
    {
    id: 1,
    favRooms: JSON.stringify(favRooms)
    },
    {
    id: 2,
    favrooms:JSON.stringify(favRooms),
    location: 'location of property',
    url: 'photo url',
    price:'cost of rental',
    description: 'description of property'
    },
    {
     id: 3,
   location: 'location of property',
   url: 'photo url',
   price:'cost of rental',
    }
];

const seedFavorites = () => User.bulkCreate(favoritesData);

module.exports = seedFavorites;