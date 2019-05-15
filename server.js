//dependencies 
const express = require("express");
const mongojs = require("mongojs");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const logger = require("morgan");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

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
// app.use(logger("dev"));

// App security with Helemt
app.use(helmet());

// Enable all CORS requests
app.use(cors())

// Log HTTP requests
app.use(morgan('combined'));

// Below info will be between get endpoints and post endpoint
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true, 
        jwksRequestsPerMinute: 5,
        jwksUri: `https://dev-lifter1500.auth0.com/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer
    audience: 'xe0N7xfT2EcWvwO0AHe2DN0zMJ6sNulW',
    issuer: 'https://dev-lifter1500.auth0.com/',
    algorithms: ['RS256']
});

//routes


//port 3000
app.listen(3000, function() {
    console.log("App running on port 3000");
});