const bcrypt = require("bcryptjs");
const validator = require("email-validator");

const User = require("../users/userModel");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

exports.hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
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
      throw new Error("Incorrect credentials supplied");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.updatePass = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username });
    if (
      req.user &&
      (await bcrypt.compare(req.body.password, req.user.password))
    ) {
      req.body.password = await bcrypt.hash(req.body.newpassword, saltRounds);
      next();
    } else {
      throw new Error("Incorrect credentials supplied");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
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
    res.status(500).send({ error: error.message });
  }
};

exports.validateUsername = (req, res, next) => {
  try {
    if (req.body.username.match("^[A-Za-z0-9]+$")) {
      next();
    } else {
      throw new Error("Username can only use letters and numbers");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
