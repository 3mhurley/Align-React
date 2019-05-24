require("dotenv").config();

//dependencies 
const express = require("express");
// const mongojs = require("mongojs");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const logger = require("morgan");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
// const logger = require("morgan");
const routes = require('./routes');
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3001;
//initialize express
const app = express();

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(logger("dev"));

// App security with Helmet
app.use(helmet());

// Enable all CORS requests
app.use(cors())

// Log HTTP requests
app.use(morgan('combined'));



// // Below info will be between get endpoints and post endpoint
// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit: true, 
//         jwksRequestsPerMinute: 5,
//         jwksUri: `https://dev-lifter1500.auth0.com/.well-known/jwks.json`
//     }),

//     // Validate the audience and the issuer
//     audience: 'xe0N7xfT2EcWvwO0AHe2DN0zMJ6sNulW',
//     issuer: 'https://dev-lifter1500.auth0.com/',
//     algorithms: ['RS256']
// });

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/aligncalendar", {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('mongodb connected'))
    .catch(err => console.error(err));

//port 3000
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});

// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') { // throw errors in development to force you to fix them
//     process.on('unhandledRejection', error => new Error(error));
// } else { // only log errors in prod
//     process.on('unhandledRejection', error => console.error(error));
// }