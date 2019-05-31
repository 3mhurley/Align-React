const router = require("express").Router();
const scheduleRoutes = require("./schedule");
const calendarRoutes = require("./calendar");
const userRoutes = require("./users");

//calendar routes
router.use("/calendar", calendarRoutes);

//schedule routes
router.use("/schedule", scheduleRoutes);

//user routes

router.use("/users", userRoutes);


module.exports = router;