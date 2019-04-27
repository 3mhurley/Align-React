var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//schema constructor
var ScheduleSchema = new Schema({

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
var Schedule = mongoose.model("Schedule", ScheduleSchema);

//export user model
module.exports = Schedule;