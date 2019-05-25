const router = require("express").Router();
const calendar = require("../../controllers/calendar");

// matches with "/api/newcal"
router.route("/calendar")
    .get(calendar.findAll)
    .post(calendar.create);

// matches with "/api/newcal:id"
router.route('/calendar/:id')
    .get(calendar.findById)
    .put(calendar.update)
    .delete(calendar.remove);

module.exports = router;