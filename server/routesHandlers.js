const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, JWT_SECRET } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// const verifyJWT = (req, res, next) => {
//   const token = req.headers["x-access-token"];
//   if (!token) {
//     res.send("user is not authenticated.");
//   } else {
//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//       if (err) {
//         res.json({ auth: false, message: "authentication failed" });
//       } else {
//         req.userId = decoded.id;
//         next();
//       }
//     });
//   }
// };
//signup
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");

  try {
    const isUser = await db.collection("users").findOne({ username: username });
    const isEmail = await db.collection("users").findOne({ email: email });

    if (!isUser && !isEmail) {
      //get random avatar from collection
      const avatars = await db.collection("avatars").find().toArray();
      const randomAv = avatars[Math.floor(Math.random() * avatars.length)];
      const avatar = randomAv.avatar;

      //encrypt and salt password
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = {
        username: username,
        email: email,
        password: hashedPassword,
        avatar: avatar,
      };

      await db.collection("users").insertOne(newUser);

      //create userTitlesObject
      const userTitlesObj = {
        userId: newUser._id,
        titles: [],
      };
      await db.collection("userTitles").insertOne(userTitlesObj);

      return res.status(200).json({
        status: 200,
        success: true,
        msg: "signup confirmed!",
      });
    }

    if (isUser || isEmail) {
      return res.status(400).json({
        status: 400,
        data: req.body,
        msg: "please provide unique sign-up details.",
      });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message });
  }
  client.close();
};

//user login
const handleLogin = async (req, res) => {
  const { username, password } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");
  try {
    const isUser = await db.collection("users").findOne({ username: username });
    const isPassword = await bcrypt.compare(password, isUser.password);
    const userTitles = await db
      .collection("userTitles")
      .findOne({ userId: isUser._id });

    const user = {
      _id: isUser._id,
      username: isUser.username,
      avatar: isUser.avatar,
      userTitles: userTitles,
      //token
    };

    if (isUser && isPassword) {
      return res
        .status(200)
        .json({ status: 200, data: { user }, message: "success" });
    }
    if (!isUser || !isPassword) {
      return res.status(400).json({
        status: 400,
        data: req.body,
        message: "please review your log in details.",
      });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message });
  }
  client.close();
};

//re-authorize on return
const reAuth = async (req, res) => {
  const id = req.params.isCurrent;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");

  const verified = await db.collection("users").findOne({ _id: ObjectID(id) });
  const userTitles = await db
    .collection("userTitles")
    .findOne({ userId: verified._id });
  const user = {
    _id: verified._id,
    username: verified.username,
    avatar: verified.avatar,
    userTitles: userTitles,
  };
  try {
    if (verified) {
      return res
        .status(200)
        .json({ status: 200, data: { user }, message: "success" });
    }
  } catch (err) {}
};

module.exports = { createUser, handleLogin, reAuth };
