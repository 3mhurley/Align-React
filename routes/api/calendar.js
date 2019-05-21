const router = require("express").Router();
const calendar = require("../../controllers/calendar");

// matches with "/api/newcal"
router.route("/newcal")
    .get(calendar.findAll)
    .post(calendar.create);

// matches with "/api/newcal:id"
router.route('/:id')
    .get(calendar.findById)
    .put(calendar.update)
    .delete(calendar.remove);

module.exports = router;