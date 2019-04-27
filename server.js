//dependencies 
var express = require("express");
var mongojs = require("mongojs");

//initialize express
var app = express();

//database configuration
var databaseUrl = "";
var collections = [""];

//use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

//log issues
db.on("error", function(error) {
    console.log("Database error:", error);
});

//port 3000
app.listen(3000, function() {
    console.log("App running on port 3000");
})