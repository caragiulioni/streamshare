const express = require("express");
const router = express.Router();
const { createUser } = require("./routesHandlers");
//import HANDLERS

router.post("/signup", createUser);
//router.get("/", handlerFunction);
//router.get("/path/:param", handleParam);

module.exports = router;
