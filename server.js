//dependencies 
const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");

//initialize express
const app = express();

//database configuration
const databaseUrl = "";
const collections = [""];

//use mongojs to hook the database to the db variable 
const db = mongojs(databaseUrl, collections);

//log issues
db.on("error", function(error) {
    console.log("Database error:", error);
});

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));



//port 3000
app.listen(3000, function() {
    console.log("App running on port 3000");
});