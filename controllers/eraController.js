const db = require("../models");

// Defining methods for the Questions Controller
module.exports = {
  findAll: function (req, res) {
    switch (req.originalUrl) {
      case "/api/era":
        db.Era
          .find()
          .then(dbSue => res.json(dbSue))
          .catch(err => res.status(422).json(err));
    }
  },
};