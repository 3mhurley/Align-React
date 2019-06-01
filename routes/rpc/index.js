const router = require("express").Router();
const contactFormRoute = require("./contactform");

router.use("/send_contact_email", contactFormRoute);

module.exports = router;