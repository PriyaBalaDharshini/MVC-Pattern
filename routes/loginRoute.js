const express = require("express");
const loginRouter = express.Router();
const loginConreoller = require("../controllers/loginController")

loginRouter.get("/", loginConreoller.get);

module.exports = loginRouter;