const router = require("express").Router();
const schedule = require("../../controllers/schedule");

// matches with "/api/:id"
router.route('/:id')
    .get(schedule.findById);

// matches with "/api/"
router.route("/")
    .post(schedule.create);
    
module.exports = router;