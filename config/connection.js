//import sequelize
const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

//connect to database pass in your MySQL info
if (process.env.JAWSDB_URL) {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;