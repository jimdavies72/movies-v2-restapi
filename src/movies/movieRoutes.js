const { Router } = require("express");
const {
  addMovie,
  listMovies,
  listMyMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  testRoute,
} = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.get("/mymovies/:user_id", listMyMovies);
movieRouter.get("/movie/:title", getMovie);
movieRouter.put("/movie/:title", updateMovie);
movieRouter.delete("/movie/:title", deleteMovie);
movieRouter.get("/test", testRoute);

module.exports = movieRouter;
