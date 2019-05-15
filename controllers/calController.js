const db = require("../models");

//defining methods for the controller
module.exports = {

    //owner calendar
    findById: function(req, res) {
        db.Calendar
            .findById(req.body._id)
            //what does this do?
            .then(dbDoc => res.json(dbDoc))
            .catch(err => res.status(422).json(err));
    }, 

    create: function(req, res) {
        db.Calendar
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Calendar
            .findOneAndUpdate({ _id: req.body }, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};