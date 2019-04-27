var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//schema constructor
var UserSchema = new Schema({

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
var User = mongoose.model("User", UserSchema);

//export user model
module.exports = User;