const { Router } = require("express");
const {
  addMovie,
  listMovies,
  listMyMovies,
  searchMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  testRoute,
} = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.get("/movie/search/:title", searchMovies);
movieRouter.get("/mymovies/:user_id", listMyMovies);
movieRouter.get("/movie/:title", getMovie);
movieRouter.put("/movie/:id", updateMovie);
movieRouter.delete("/movie/:id", deleteMovie);
movieRouter.get("/test", testRoute);

module.exports = movieRouter;
