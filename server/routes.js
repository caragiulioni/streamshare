const express = require("express");
const router = express.Router();
const {
  createUser,
  handleLogin,
  reAuth,
  updateAvatar,
} = require("./handlers/accountHandlers");
const { handleSearch, handleProfile } = require("./handlers/searchHandlers");
const { follow, unfollow } = require("./handlers/followsHandlers");
const {
  getUserTitles,
  getTitle,
  addTitle,
  removeTitle,
} = require("./handlers/titleHandlers");

//account handlers
router.post("/api/signup", createUser);
router.post("/api/login", handleLogin);
router.get("/api/auth/:isCurrent", reAuth);
router.put("/api/avatar", updateAvatar);

//title handlers
router.get("/api/titles/:userId", getUserTitles);
router.get("/api/title/:titleId", getTitle);
router.post("/api/add-title", addTitle);
router.delete("/api/remove-title", removeTitle);

//search handlers
router.post("/api/search", handleSearch);
router.get("/api/profile/:username", handleProfile);

//folow handlers
router.post("/api/follow", follow);
router.delete("/api/unfollow", unfollow);
module.exports = router;
