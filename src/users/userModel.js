const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: false,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;
