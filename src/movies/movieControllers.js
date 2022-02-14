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
    const movies = await Movie.find({});
    res.status(200).send({ movies });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.find({ title: req.params.title });
    if (movie.length <= 0) {
      res.status(404).json({ msg: `Movie: ${req.params.title} not found` });
    } else {
      res.status(200).json({ movie });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const filter = { title: req.params.title };
    const update = req.body;
    const options = { new: false };

    result = await Movie.updateOne(filter, update, options);

    if (result.matchedCount >= 1) {
      res.status(200).json({ msg: "Movie updated", data: req.body });
    } else {
      res.status(404).json({ msg: `Movie: ${req.params.title} not found` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    result = await Movie.deleteOne({ title: req.params.title });

    if (result.deletedCount === 0) {
      res.status(404).json({ msg: `Movie: ${req.params.title} not found` });
    } else {
      res
        .status(200)
        .json({ msg: `Movie: ${req.params.title} has been removed` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
