const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/align', {useNewUrlParser: true});

module.exports= {
    Calendar: require('./calendar'),
    Schedule: require('./schedule'),
    User: require('./userModel'),
}