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
userRouter.get("/user/:email", getUser);
userRouter.put("/user/:email", updateUser);
userRouter.delete("/user/:email", deleteUser);

module.exports = userRouter;
