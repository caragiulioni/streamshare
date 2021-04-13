const express = require("express");
const router = express.Router();
const { createUser, handleLogin, reAuth } = require("./routesHandlers");

router.post("/signup", createUser);
router.post("/login", handleLogin);
router.get("/auth/:isCurrent", reAuth);

// //authorize
// router.get("/auth", verifyJWT, (req, res) => {
//   res.send("Authorized");
// });
//router.get("/", handlerFunction);
//router.get("/path/:param", handleParam);

module.exports = router;
