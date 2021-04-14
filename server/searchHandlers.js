const request = require("request");
// const { MongoClient, ObjectID } = require("mongodb");
require("dotenv").config();
const { API_SECRET } = process.env;
// const options = { useNewUrlParser: true, useUnifiedTopology: true };

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
    return res
      .status(200)
      .json({ status: 200, data: JSON.parse(body), message: "success" });
  });
};

module.exports = { handleSearch };
