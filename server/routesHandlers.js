//SIGN UP
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { userName, email, password } = req.body;

  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");

  try {
    const isUser = await db.collection("users").findOne({ username: userName });
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
        username: userName,
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
        msg: "sorry, please provide unique login details.",
      });
    }
  } catch (err) {
    res.status(400).json({ status: 400, message: err.message });
  }
  client.close();
};

module.exports = { createUser };
