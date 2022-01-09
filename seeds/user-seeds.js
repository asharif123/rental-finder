
const { User } = require('../models');

const userdata = [
{
    user_id: 1,
    name: 'Julia Son',
    email: 'JuliaSon@sbcglobal.net',
    password: 'Password 1234',
},
{
     user_id: 2,
     name: 'Danny Larusso',
     email: 'dannyboy@yahoo.com',
     password: 'Mayagi',
},
{
    user_id: 3,
    name: 'Jonny Lawrence',
    email: 'Karate4eva@gmail.com',
    password: 'CobraKai',
},
{
    user_id: 4,
    name: 'Miguel Diaz',
    email: 'Mdiaz@gmail.com',
    password: 'Eyeoftiger',
},
{
    user_id: 5,
    name: 'Jonny Lawrence',
    email: 'Karate4evassss@gmail.com',
    password: 'CobraKai',
},
{
    user_id: 6,
    name: 'Tory Nichols',
    email: 'ToryN@aol.com',
    password: 'Craykaratechick',
},

];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;