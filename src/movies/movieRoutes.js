const { Router } = require("express");
const {
  addMovie,
  listMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.get("/movie/:title", getMovie);
movieRouter.put("/movie/:title", updateMovie);
movieRouter.delete("/movie/:title", deleteMovie);

module.exports = movieRouter;
