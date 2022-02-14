require("./db/connection");
const express = require("express");
const movieRouter = require("./movies/movieRoutes");
const userRouter = require("./users/userRoutes");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
