const express = require("express");
const userRouter = express.Router();
const useConreoller = require("../controllers/userController")

userRouter.get("/", useConreoller.get);

module.exports = userRouter;