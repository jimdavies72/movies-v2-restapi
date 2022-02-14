const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
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
    const user = await Movie.find({ email: req.params.email });
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
    const filter = { email: req.params.email };
    const update = req.body;
    const options = { new: false };

    result = await Movie.updateOne(filter, update, options);

    if (result.matchedCount >= 1) {
      res.status(200).json({ msg: "User updated", data: req.body });
    } else {
      res.status(404).json({ msg: `User: ${req.params.title} not found` });
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
