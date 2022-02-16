const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(200).send({ movie: newMovie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find({}, "title actors");
    res.status(200).send({ movies });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.listMyMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ user_id: req.params.user_id });
    res.status(200).send({ movies });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne(
      { title: req.params.title },
      "title actors"
    );

    movie
      ? res.status(200).send({ movie })
      : res.status(404).send({ msg: `Movie: ${req.params.title} not found` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const filter = { title: req.params.title };
    const update = req.body;
    const options = { new: true };

    const movie = await Movie.findOneAndUpdate(filter, update, options);

    movie
      ? res.status(200).send({ movie })
      : res.status(404).send({ msg: `Movie: ${req.params.title} not found` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    result = await Movie.deleteOne({ title: req.params.title });
    if (result.deletedCount === 0) {
      res.status(404).send({ msg: `Movie: ${req.params.title} not found` });
    } else {
      res
        .status(200)
        .send({ msg: `Movie: ${req.params.title} has been removed` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.testRoute = async (req, res) => {
  res.status(200).send({ test: "test route works" });
};
