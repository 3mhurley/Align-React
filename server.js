//dependencies 
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require('./routes');

//initialize express
const app = express();

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(routes);

//port 3000
app.listen(3000, function() {
    console.log("App running on port 3000");
});

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') { // throw errors in development to force you to fix them
    process.on('unhandledRejection', error => new Error(error));
} else { // only log errors in prod
    process.on('unhandledRejection', error => console.error(error));
}