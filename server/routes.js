const express = require("express");
const router = express.Router();
const { createUser, handleLogin, reAuth } = require("./routesHandlers");
const { handleSearch } = require("./searchHandlers");

router.post("/signup", createUser);
router.post("/login", handleLogin);

//auth returning user
router.get("/auth/:isCurrent", reAuth);

//user search
router.post("/search", handleSearch);
module.exports = router;
