var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema constructor
var CalendarSchema = new Schema({

    calendarId: {
        type: String,
        unique: true,
        required: true,
    },

    userId: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    startDate: {
        type: String,
        trim: true
    },

});

var Calendar = mongoose.model("Calendar", CalendarSchema);

//export user model
module.exports = Calendar;