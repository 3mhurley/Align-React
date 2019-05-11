const db = require("../models");

//defining methods for the controller
module.exports = {
    findAll: function(req, res) {
        db.Calendar
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Calendar
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Calendar
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Calendar   
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Calendar
            .catch(err => res.status(422).json(err));
    }
};