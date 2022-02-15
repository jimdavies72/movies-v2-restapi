const User = require("./userModel");
const bcrypt = require("bcrypt");

exports.addUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
    const hashedPW = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
      email: req.body.email,
      name: req.body.name,
      passwordHash: hashedPW,
    });
    res.status(200).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ users });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find({ email: req.params.email });
    if (user.length <= 0) {
      res.status(404).json({ msg: `User: ${req.params.email} not found` });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    let update = {};
    if (req.body.password) {
      const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS));
      const hashedPW = await bcrypt.hash(req.body.password, salt);

      update = {
        name: req.body.name,
        passwordHash: hashedPW,
      };
    } else {
      update = req.body;
    }

    const filter = { email: req.params.email };
    const options = { new: false };

    result = await User.updateOne(filter, update, options);

    if (result.matchedCount >= 1) {
      res.status(200).json({ msg: `User: ${req.params.email} updated` });
    } else {
      res.status(404).json({ msg: `User: ${req.params.email} not found` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    result = await User.deleteOne({ email: req.params.email });

    if (result.deletedCount === 0) {
      res.status(404).json({ msg: `User: ${req.params.email} not found` });
    } else {
      res
        .status(200)
        .json({ msg: `User: ${req.params.email} has been removed` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
