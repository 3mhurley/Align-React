var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema constructor
var ScheduleSchema = new Schema({

    guestname: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    calendarID: {
        type: String,
        trim: true,
    }

});

//
var Schedule = mongoose.model("Schedule", ScheduleSchema);

//export user model
module.exports = Schedule;