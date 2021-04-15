const express = require("express");
const router = express.Router();
const {
  createUser,
  handleLogin,
  reAuth,
} = require("./handlers/routesHandlers");
const { handleSearch } = require("./handlers/searchHandlers");
const { getTitle } = require("./handlers/titleHandlers");

router.post("/signup", createUser);
router.post("/login", handleLogin);

//auth returning user
router.get("/auth/:isCurrent", reAuth);

//get single title
router.get("/title/:titleId", getTitle);

//user search
router.post("/search", handleSearch);

module.exports = router;
