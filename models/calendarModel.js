var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema constructor
var CalendarSchema = new Schema({

    ownerEmail: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    startDate: {
        type: Number,
        trim: true,
    },
});

//
var Calendar = mongoose.model("Calendar", CalendarSchema);

//export user model
module.exports = Calendar;