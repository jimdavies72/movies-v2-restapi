const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
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
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      res.status(404).send({ msg: `User: ${req.params.username} not found` });
    } else {
      res.status(200).send({ user });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const update = req.body;

    const filter = { username: req.params.username };
    const options = { new: false };

    result = await User.updateOne(filter, update, options);

    if (result.matchedCount >= 1) {
      res.status(200).send({ msg: `User: ${req.params.username} updated` });
    } else {
      res.status(404).send({ msg: `User: ${req.params.username} not found` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updatePassword = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    result = await User.deleteOne({ username: req.params.username });

    if (result.deletedCount === 0) {
      res.status(404).send({ msg: `User: ${req.params.username} not found` });
    } else {
      res
        .status(200)
        .send({ msg: `User: ${req.params.username} has been removed` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    res.status(200).send({ user: req.user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
