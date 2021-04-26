const request = require("request");
const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, API_SECRET } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const handleSearch = (req, res) => {
  const query = req.body.query;
  const request = require("request");

  const options = {
    method: "GET",
    url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
    qs: { s: `${query}`, page: "1", r: "json" },
    headers: {
      "x-rapidapi-key": `${API_SECRET}`,
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      useQueryString: true,
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res
      .status(200)
      .json({ status: 200, data: JSON.parse(body), message: "success" });
  });
};

const handleProfile = async (req, res) => {
  const username = req.params.username;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");
  const foundUser = await db
    .collection("users")
    .findOne({ username: username });
  const userTitles = await db
    .collection("userTitles")
    .findOne({ userId: foundUser._id });
  const userObj = {
    _id: foundUser._id,
    username: foundUser.username,
    avatar: foundUser.avatar,
    userTitles,
  };

  try {
    if (userTitles && foundUser) {
      return res
        .status(200)
        .json({ status: 200, data: { userObj }, message: "success" });
    }
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
  client.close();
};

const getAllUsers = async (req, res) => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");
  try {
    const allUsers = await db.collection("users").find().toArray();
    const members = allUsers.map((user) => {
      return { username: user.username, avatar: user.avatar };
    });
    return res.status(200).json({ status: 200, members, message: "success" });
  } catch (err) {}
  client.close();
};
module.exports = { getAllUsers, handleSearch, handleProfile };
