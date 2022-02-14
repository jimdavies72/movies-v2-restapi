const { Router } = require("express");
const {
  addUser,
  listUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("./userControllers");
const userRouter = Router();

userRouter.post("/user", addUser);
userRouter.get("/user", listUsers);
userRouter.get("/user/:title", getUser);
userRouter.put("/user/:title", updateUser);
userRouter.delete("/user/:title", deleteUser);

module.exports = userRouter;
