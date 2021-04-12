const express = require("express");
const router = express.Router();
const { createUser, handleLogin } = require("./routesHandlers");
//import HANDLERS

router.post("/signup", createUser);
router.post("/login", handleLogin);
//router.get("/", handlerFunction);
//router.get("/path/:param", handleParam);

module.exports = router;
