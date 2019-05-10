const router = require("express").Router();
const scheduleRoutes = require("./scheduleRoutes");
const calendarRoutes = require("./calendarRoutes");

//schedule routes
router.use("/scheduleRoutes");
router.use("/calendarRoutes");

//calendar routes

module.exports = router;