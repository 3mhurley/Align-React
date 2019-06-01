var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema constructor
var UserSchema = new Schema({

    userId: {
        type: String,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    userName: {
        type: String,
        trim: true,
    },

    calendarId: {
        type: String,
        trim: true,
    }

});

//
var Users = mongoose.model('User', UserSchema);

//export user model
module.exports = Users;