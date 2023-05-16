const mysql = require("mysql2");
const fs = require ("fs");
const dbConfig = require("../config/db.config.js");

// Load .env variables 
require("dotenv").config() 

// Read SQL seed query 
const seedQuery = fs. readFileSync("db/seed.sql", { encoding: "utf-8", }) 

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    multipleStatements: true
  });
  
connection.connect(); 

// Run seed 
connection.query(seedQuery, err => { 
    if (err) throw err 
    console.log("SQL seed completed!");
    connection.end() 
})