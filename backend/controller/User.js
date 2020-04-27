const User = require("../models/User");
const Bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = "secret"

module.exports = {
  create: (req, res, next) => {
    User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  },

  authenticated: (req, res, next) => {
    User.findOne({
      email: req.body.email})
      .then((response, err) => {
        if (err) next(err);
        else {
          if (
            response != null &&
            Bcrypt.compareSync(req.body.password, response.password)
          ) {
            const token = jwt.sign(
              {
                id: response._id,
              },
              'secret',{expiresIn: 60 * 60}
            );
            res.json(token);
          }
          else{
              res.json({status : err})
          }
        }
      })
      .catch((err) => res.json(err));
  },

  getUserData : (req, res) => {
    User.find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
}
}
