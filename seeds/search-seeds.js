const { Search } = require('../models');
const searchData = [
    {
    id: 1,
    city_name: 'Irvine',
    state_name: 'CA',
    minimum_budget: 500,
    maximum_budget: 1200,
    user_id: 1
    },
    {
    id: 2,
    city_name: 'Tustin',
    state_name: 'CA',
    minimum_budget: 500,
    maximum_budget: 1200,
    user_id: 2
    },
    {
    id: 3,
    city_name: 'Fullerton',
    state_name: 'CA',
    minimum_budget: 500,
    maximum_budget: 1200,
    user_id: 3
    },
    {
    id: 4,
    city_name: 'Orange',
    state_name: 'CA',
    minimum_budget: 500,
    maximum_budget: 1200,
    user_id: 4
    },
    {
    id: 5,
    city_name: 'Corona',
    state_name: 'CA',
    minimum_budget: 500,
    maximum_budget: 1200,
    user_id: 5
    },
    {
    id: 6,
    city_name: 'Riverside',
    state_name: 'CA',
    minimum_budget: 500,
    maximum_budget: 1200,
    user_id: 6
    },
];
const seedSearches = () => Search.bulkCreate(searchData);

module.exports = seedSearches;