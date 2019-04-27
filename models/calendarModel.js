var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//schema constructor
var CalendarSchema = new Schema({

    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    }

    //add additional fields here

});

//
var Calendar = mongoose.model("Calendar", CalendarSchema);

//export user model
module.exports = Calendar;