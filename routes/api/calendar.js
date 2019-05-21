const router = require("express").Router();
const calendar = require("../../controllers/calendar.js");

router.route("/newcal")
    // .get(calController.findById)
    .post(calendar.create);

router.route('/:id')

    // .put(calController.update)
    // .delete(calController.destroy);

module.exports = router;