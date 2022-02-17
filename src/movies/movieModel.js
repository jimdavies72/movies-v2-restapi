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
  synopsis: {
    type: String,
  },
  user_id: {
    type: String,
  },
});

const Movie = new mongoose.model("Movie", movieSchema);

module.exports = Movie;
