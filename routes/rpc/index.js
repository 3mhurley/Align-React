const router = require("express").Router();
const contactFormRoute = require("./contactForm");

router.use("/send_contact_email", contactFormRoute);

module.exports = router;