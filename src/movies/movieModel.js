const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  actors: [
    {
      type: String,
    },
  ],
  email: {
    type: String,
    required: false,
  },
});

const Movie = new mongoose.model("Movie", movieSchema);

module.exports = Movie;
