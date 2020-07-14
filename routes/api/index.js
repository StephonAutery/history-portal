const router = require("express").Router();
const questionsRoutes = require("./questions.routes");
const resultsRoutes = require("./results.routes");
const presRoutes = require("./pres.routes");
const usersRoutes = require("./users.routes");
const statsRoutes = require("./stats.routes");
const { route } = require("./questions.routes");

// questions routes
router.use("/questions", questionsRoutes);
router.use("/questions/sue", questionsRoutes);
router.use("/questions/pres", questionsRoutes);

// // history routes
// router.use("/history", historyRoutes);

// users routes
router.use("/users", usersRoutes);
router.use("/user", usersRoutes);

// //results routes
router.use("/results", resultsRoutes);

// //results routes
router.use("/stats", statsRoutes);

// pres routes
router.use("/presinfo", presRoutes);

module.exports = router;