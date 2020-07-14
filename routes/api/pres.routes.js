const router = require("express").Router();

// Load Pres model
const Pres = require("../../models/presidents.model");

router.get("/:id", (req, res) => {
    Pres.findOne({ _id: req.params.id }).then(pres => {
        return res.json({ pres });
    })
});

module.exports = router;