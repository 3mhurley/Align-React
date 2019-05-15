const router = require("express").Router();
const scheduleRoutes = require("./scheduleRoutes");
const calendarRoutes = require("./calendarRoutes");

//schedule routes
// router.use("/schedules", scheduleRoutes);
router.use("/calendars", calendarRoutes);

//calendar routes

module.exports = router;