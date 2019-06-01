const db = require("../models");

//defining methods for the controller
module.exports = {

    //owner calendar
    find: function(req, res) {
        db.Users
            .find( { calendarId: this.state.calendarId } )
            .then(dbDoc => res.json(dbDoc))
            .catch(err => res.status(422).json(err));
    }
};