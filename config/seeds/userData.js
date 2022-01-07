const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'Dlelias',
    password: 'HelloWorld',
    email: 'Dlelias@uci.edu',
    search_history: [
      {},
    ],
    saved_searches: [
      {}
    ],
     
  },
  {
    id: 2,
    username: 'Julia Son',
    password: 'waxon123',
    email: 'Karatekid2@yahoo.com',
    search_history: [
      {},
    ],
    saved_searches: [
      {}
    ],  
  },
  {
    id: 3,
    username: 'Jonny Lawrence',
    password: 'CobraKai',
    email: 'Karate4eva@gmail.com',
    search_history: [
      {},
    ],
    saved_searches: [
      {}
    ], 
  },
  {
    id: 4,
    username: 'Daniel Larusso',
    password: 'MayagiDo',
    email: 'Dannyboy@sbcglobal.net',
    search_history: [
      {},
    ],
    saved_searches: [
      {}
    ],
    
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;