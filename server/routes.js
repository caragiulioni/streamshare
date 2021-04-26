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
} = require("./handlers/titleHandlers");

//account handlers
router.post("/signup", createUser);
router.post("/login", handleLogin);
router.get("/auth/:isCurrent", reAuth);
router.put("/avatar", updateAvatar);

//title handlers
router.get("/titles/:userId", getUserTitles);
router.get("/title/:titleId", getTitle);
router.post("/add-title", addTitle);
router.delete("/remove-title", removeTitle);

//search handlers
router.post("/search", handleSearch);
router.get("/profile/:username", handleProfile);
router.get("/users", getAllUsers);

//folow handlers
router.get("/following/:userId", getFollowing);
router.post("/follow", follow);
router.delete("/unfollow", unfollow);
module.exports = router;
