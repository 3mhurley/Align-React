var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//schema constructor
var UserSchema = new Schema({

    email: {
        type: String,
        trim: true
    },

    password: {
        type: String
    },

});

//
var User = mongoose.model(UserSchema);

//export user model
module.exports = User;