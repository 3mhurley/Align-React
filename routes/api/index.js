const router = require("express").Router();
const scheduleRoutes = require("./schedule");
const calendarRoutes = require("./calendar");

//schedule routes
// router.use("/schedules", scheduleRoutes);
router.use("/calendars", calendarRoutes);

//calendar routes

module.exports = router;