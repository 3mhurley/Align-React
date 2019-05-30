var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema constructor
var ScheduleSchema = new Schema({

    title: {
        type: String,
        trim: true
    },

    calendarId: {
        type: String
    },

    userId: {
        type: String,
        unique: true,
    },

    start: {
        type: String,
    },

    end: {
        type: String,
    }

});

//
var Schedule = mongoose.model("Schedule", ScheduleSchema);

//export user model
module.exports = Schedule;