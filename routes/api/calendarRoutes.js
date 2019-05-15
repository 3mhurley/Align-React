const router = require("express").Router();
const calController = require("../../controllers/calController");

router.route("/")
    .get(calController.findById)
    .post(calController.create);

router.route('/:id')
    // .put(calController.update)
    // .delete(calController.destroy);

module.exports = router;