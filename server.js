require("dotenv").config();

//dependencies 
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require('./routes');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
// const info = require('../../client/src/components/ContactMain/Config/Config');
dotenv.config();

const PORT = process.env.PORT || 3001;
//initialize express
const app = express();

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

app.use(routes);

app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "http://localhost:3000");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || process.env.REACT_APP_MONGODB, {useNewUrlParser: true, useCreateIndex: true})
    .then(() => console.log('mongodb connected'))
    .catch(err => console.error(err));
    

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') { // throw errors in development to force you to fix them
    process.on('unhandledRejection', error => new Error(error));
} else { // only log errors in prod
    process.on('unhandledRejection', error => console.error(error));
}

//port 3000
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});