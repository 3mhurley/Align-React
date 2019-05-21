const router = require("express").Router();
const schedule = require("../../controllers/schedule.js");

//renders calendar based on id 
router.route('/:id')
    .get(calendar.findById);

//sends events to db
router.route("/")
    .post(schedule.create);

    // .put(calController.update)
    // .delete(calController.destroy);

module.exports = router;