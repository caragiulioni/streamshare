const express = require("express");
const router = express.Router();
const {
  createUser,
  handleLogin,
  reAuth,
  updateAvatar,
} = require("./handlers/accountHandlers");
const {
  getAllUsers,
  handleSearch,
  handleProfile,
} = require("./handlers/searchHandlers");
const {
  follow,
  unfollow,
  getFollowing,
} = require("./handlers/followsHandlers");
const {
  getUserTitles,
  getTitle,
  addTitle,
  removeTitle,
  getPopular,
} = require("./handlers/titleHandlers");

//account handlers
router.post("/api/signup", createUser);
router.post("/api/login", handleLogin);
router.get("/api/auth/:isCurrent", reAuth);
router.put("/api/avatar", updateAvatar);

//title handlers
router.get("/api/popular", getPopular);
router.get("/api/titles/:userId", getUserTitles);
router.get("/api/title/:titleId", getTitle);
router.post("/api/add-title", addTitle);
router.delete("/api/remove-title", removeTitle);

//search handlers
router.post("/api/search", handleSearch);
router.get("/api/profile/:username", handleProfile);
router.get("/api/users", getAllUsers);

//folow handlers
router.get("/api/following/:userId", getFollowing);
router.post("/api/follow", follow);
router.delete("/api/unfollow", unfollow);
module.exports = router;
