const express = require("express");
const morgan = require("morgan");

const router = require("./routes");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.json());

//app.use("/xxxxx", router)

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Nothing here.",
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
