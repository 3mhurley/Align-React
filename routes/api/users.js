const router = require("express").Router();
const users = require("../../controllers/users");

// matches with "/api/:id"
router.route('users/:id')
    .get(users.find);

module.exports = router;