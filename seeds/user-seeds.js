
const { User } = require('../models');

const userdata = [
{
    user_id: 1,
    username: 'Julia Son',
    password: 'Password 1234',
    email: 'JuliaSon@sbcglobal.net',
},
{
     user_id: 2,
     name: 'Danny Larusso',
     password: 'Mayagi',
     email: 'dannyboy@yahoo.com',
},
{
    user_id: 3,
    name: 'Jonny Lawrence',
    password: 'CobraKai',
    email: 'Karate4eva@gmail.com',
},
{
    user_id: 4,
    name: 'Miguel Diaz',
    password: 'Eyeoftiger',
    email: 'Mdiaz@gmail.com',
},
{
    user_id: 5,
    name: 'Jonny Lawrence',
    password: 'CobraKai',
    email: 'Karate4eva@gmail.com',
},
{
    user_id: 6,
    name: 'Tory Nichols',
    password: 'Craykaratechick',
    email: 'ToryN@aol.com',
},

];

const seedUsers = () => Painting.bulkCreate(userdata);

module.exports = seedUsers;