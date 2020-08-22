const router = require("express").Router();
const eraController = require("../../controllers/eraController");


router.route("/")
    .get(eraController.findAll);

module.exports = router;