const router = require("express").Router();
const qController = require("../../controllers/qController");

router
  .route("/")
  .get(qController.findAll);

module.exports = router;