const db = require("../models");

//defining methods for the controller
module.exports = {

    //user schedules
    findAll: function(req, res) {
        db.Schedule
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Schedule
            .findById(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Schedule
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Schedule   
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Schedule
            .findById({ _id: req.body })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

}