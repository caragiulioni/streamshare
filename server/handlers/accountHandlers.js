const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, JWT_SECRET } = process.env;
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

      //create userTitlesObject
      const userTitlesObj = {
        userId: newUser._id,
        titles: [],
      };
      await db.collection("userTitles").insertOne(userTitlesObj);

      //create followsObj
      const followsObj = {
        userID: newUser._id,
        follows: [],
      };
      await db.collection("follows").insertOne(followsObj);

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

    const follows = await db
      .collection("follows")
      .findOne({ userId: isUser.follows });

    const user = {
      _id: isUser._id,
      username: isUser.username,
      avatar: isUser.avatar,
      userTitles: userTitles,
      follows: follows,
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

  const follows = await db
    .collection("follows")
    .findOne({ userId: verified.follows });

  const user = {
    _id: verified._id,
    username: verified.username,
    avatar: verified.avatar,
    userTitles: userTitles,
    follows: follows,
  };
  try {
    if (verified) {
      return res
        .status(200)
        .json({ status: 200, data: { user }, message: "success" });
    }
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

const updateAvatar = async (req, res) => {
  const { userID, avatar } = req.body;
  console.log(userID, avatar);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");
  try {
    await db
      .collection("users")
      .update({ _id: ObjectID(userID) }, { $set: { avatar: avatar } });

    const verified = await db
      .collection("users")
      .findOne({ _id: ObjectID(userID) });
    const userTitles = await db
      .collection("userTitles")
      .findOne({ userId: verified._id });

    const follows = await db
      .collection("follows")
      .findOne({ userId: verified.follows });

    const user = {
      _id: verified._id,
      username: verified.username,
      avatar: verified.avatar,
      userTitles: userTitles,
      follows: follows,
    };
    return res.status(200).json({
      status: 200,
      data: user,
      msg: "avatar updated!",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      data: req.body,
      msg: "could not add avatar",
    });
  }
};

module.exports = { createUser, handleLogin, reAuth, updateAvatar };
