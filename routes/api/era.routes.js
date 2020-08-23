const router = require("express").Router();
// Load Era model
const Era = require("../../models/era.model");

router.get("/:id", (req, res) => {
    Era.findOne({ _id: req.params.id }).then(era => {
        return res.json({ era });
    })
});

module.exports = router;