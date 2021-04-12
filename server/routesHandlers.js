//SIGN UP
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const bcrypt = require("bcrypt");

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

    const user = {
      _id: isUser._id,
      username: isUser.username,
      avatar: isUser.avatar,
    };

    if (isUser && isPassword) {
      return res
        .status(200)
        .json({ status: 200, data: user, message: "success" });
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

module.exports = { createUser, handleLogin };
