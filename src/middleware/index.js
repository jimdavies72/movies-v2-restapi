const bcrypt = require("bcryptjs");
const validator = require("email-validator");

const User = require("../users/userModel");

exports.hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.decryptPass = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username });
    if (
      req.user &&
      (await bcrypt.compare(req.body.password, req.user.password))
    ) {
      next();
    } else {
      throw new Error("Incorrect login credentials supplied");
    }
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};

exports.validateEmail = (req, res, next) => {
  try {
    if (validator.validate(req.body.email)) {
      next();
    } else {
      throw new Error("email address is in incorrect format");
    }
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
