//routes is for creating, updating, viewing, and deleting stuff in MySQL server
const mysql = require('mysql');
const dotenv = require('dotenv').config(); //security-related

//MySQL connection details
const pool = mysql.createPool({
    connectionLimit:    10,
    host:               process.env.HOST,
    user:               process.env.USER,
    password:           process.env.PASSWORD,
    database:           process.env.DATABASE
});

module.exports = {
    pool: pool
};