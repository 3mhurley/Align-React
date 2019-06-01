const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const rpcRoutes = require("./rpc");

//API routes
router.use("/api", apiRoutes);
router.use("/rpc", rpcRoutes);

//if no API routes are hit, send the React app
router.use('/*', function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;