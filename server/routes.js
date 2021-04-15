const express = require("express");
const router = express.Router();
const {
  createUser,
  handleLogin,
  reAuth,
} = require("./handlers/accountHandlers");
const { handleSearch } = require("./handlers/searchHandlers");
const {
  getUserTitles,
  getTitle,
  addTitle,
  removeTitle,
} = require("./handlers/titleHandlers");

//account handlers
router.post("/signup", createUser);
router.post("/login", handleLogin);
//auth returning user
router.get("/auth/:isCurrent", reAuth);

//title handlers
router.get("/titles/:userId", getUserTitles);
router.get("/title/:titleId", getTitle);
router.post("/add-title", addTitle);
router.delete("/remove-title", removeTitle);

//search handlers
router.post("/search", handleSearch);

module.exports = router;
