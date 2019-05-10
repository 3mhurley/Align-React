var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema constructor
var CalendarSchema = new Schema({

    firstname: {
        type: String,
        trim: true,
    },

    lastname: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    datePicker: {
        type: integer,
        trim: true,
    },
});

//
var Calendar = mongoose.model("Calendar", CalendarSchema);

//export user model
module.exports = Calendar;