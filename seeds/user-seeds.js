const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        "username": "lenard",
        "email": "lenard@outlook.com",
        "password": "password12345"
    },
    {
        "username": "anthony",
        "email": "anthony@outlook.com",
        "password": "password12345"
    },
    {
        "username": "jordan",
        "email": "jordan@outlook.com",
        "password": "password12345"
    },
    {
        "username": "blake",
        "email": "blake@outlook.com",
        "password": "password12345"
    }
];


const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;