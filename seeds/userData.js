const { User } = require('../models');

const userData = [{
    id: 1,
   name: 'Johnny Lawrence',
   email:'Karate4eva@gmail.com',
   password: 'Cobrakai',
    },
    {
        id: 2,
        name: 'Daniel Larusso',
        email:'waxon@yahoo.com',
        password: 'Mayagido',
    },
    {
        id: 3,
        name: 'Julia Song',
        email:'Juliadoeskarte@sbcglobal.net',
        password: 'Helloworld',
    },
    {
         id: 4,
        name: 'Scott Fitzgerald',
        email:'authorsgonewild@aol.com',
        password: 'Gatsby',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;