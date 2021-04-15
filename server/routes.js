const express = require("express");
const router = express.Router();
const {
  createUser,
  handleLogin,
  reAuth,
} = require("./handlers/accountHandlers");
const { handleSearch } = require("./handlers/searchHandlers");
const { getTitle, addTitle } = require("./handlers/titleHandlers");

//account handlers
router.post("/signup", createUser);
router.post("/login", handleLogin);
//auth returning user
router.get("/auth/:isCurrent", reAuth);

//get single title
router.get("/title/:titleId", getTitle);
router.post("/add-title", addTitle);

//search handlers
router.post("/search", handleSearch);

module.exports = router;
