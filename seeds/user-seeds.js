const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        "name": "Lenard",
        "email": "lenard@outlook.com",
        "password": "password12345"
    },
    {
        "name": "Anthony",
        "email": "anthony@outlook.com",
        "password": "password12345"
    },
    {
        "name": "Jordan",
        "email": "jordan@outlook.com",
        "password": "password12345"
    },
    {
        "name": "Blake",
        "email": "blake@outlook.com",
        "password": "password12345"
    }
];


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;