const { Router } = require("express");
const {
  addUser,
  listUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
  updatePassword,
} = require("./userControllers");
const {
  hashPass,
  decryptPass,
  validateEmail,
  validateUsername,
  updatePass,
} = require("../middleware");
const userRouter = Router();

userRouter.post("/user", validateUsername, validateEmail, hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.get("/user/:username", getUser);
userRouter.put("/user/:id", validateEmail, updateUser);
userRouter.delete("/user/:id", deleteUser);
userRouter.post("/login", decryptPass, loginUser);
userRouter.put("/updatepassword", updatePass, updatePassword);

module.exports = userRouter;
