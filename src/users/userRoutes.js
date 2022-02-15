const { Router } = require("express");
const {
  addUser,
  listUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("./userControllers");
const { hashPass, decryptPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.get("/user/:username", getUser);
userRouter.put("/user/:username", updateUser);
userRouter.delete("/user/:username", deleteUser);
userRouter.post("/login", decryptPass, loginUser);

module.exports = userRouter;
