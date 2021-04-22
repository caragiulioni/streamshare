const express = require("express");
const morgan = require("morgan");

const router = require("./routes");
const PORT = process.env.PORT || 8000;

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.json());

app.use("/", router);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Nothing here.",
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
