var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema constructor
var UserSchema = new Schema({

    email: {
        type: String,
        trim: true
    },

    firstName: {
        type: String,
        trim: true,
    },

    lastName: {
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