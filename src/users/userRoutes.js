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
} = require("../middleware");
const userRouter = Router();

userRouter.post("/user", validateUsername, validateEmail, hashPass, addUser);
userRouter.get("/user", listUsers);
userRouter.get("/user/:username", getUser);
userRouter.put("/user/:username", validateEmail, updateUser);
userRouter.delete("/user/:username", deleteUser);
userRouter.post("/login", decryptPass, loginUser);
userRouter.put("/user/updatepassword", decryptPass, hashPass, updatePassword);

module.exports = userRouter;
