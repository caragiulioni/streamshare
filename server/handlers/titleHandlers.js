const request = require("request");
const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, API_SECRET } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getUserTitles = async (req, res) => {
  const id = req.params.userId;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");
  const titles = await db
    .collection("userTitles")
    .findOne({ userId: ObjectID(id) });
  if (titles) {
    return res
      .status(200)
      .json({ status: 200, data: titles, message: "success" });
  }

  client.close();
};

const getTitle = async (req, res) => {
  const titleId = req.params.titleId;
  const request = require("request");

  const options = {
    method: "GET",
    url: "https://movie-database-imdb-alternative.p.rapidapi.com/",
    qs: { i: `${titleId}`, r: "json" },
    headers: {
      "x-rapidapi-key": `${API_SECRET}`,
      "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      useQueryString: true,
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    return res
      .status(200)
      .json({ status: 200, data: JSON.parse(body), message: "success" });
  });
};

const addTitle = async (req, res) => {
  const title = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");

  const newTitle = {
    imdbID: title.imdbID,
    Title: title.Title,
    Poster: title.Poster,
    Genre: title.Genre,
    Year: title.Year,
  };
  try {
    await db
      .collection("userTitles")
      .updateOne(
        { userId: ObjectID(title.userId) },
        { $push: { titles: newTitle } }
      );
    return res.status(200).json({
      status: 200,
      success: true,
      data: title,
      msg: "title added!",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      data: req.body,
      msg: "could not add title.",
    });
  }

  client.close();
};

const removeTitle = async (req, res) => {
  const { userId, imdbID } = req.body;
  console.log(userId, imdbID);
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");
  try {
    await db
      .collection("userTitles")
      .updateOne(
        { userId: ObjectID(userId) },
        { $pull: { titles: { imdbID: imdbID } } }
      );

    return res.status(200).json({
      status: 200,
      success: true,
      data: imdbID,
      msg: "title removed!",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 400,
      data: req.body,
      msg: "could not remove title.",
      err: err,
    });
  }
  client.close();
};

module.exports = { getUserTitles, getTitle, addTitle, removeTitle };
