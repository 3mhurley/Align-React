const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/align', {useNewUrlParser: true});

module.exports= {
    Calendar: require('./calendarModel'),
    Schedule: require('./scheduleModel'),
    // User: require('./userModel'),
}