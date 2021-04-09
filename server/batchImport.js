const fs = require("file-system");
const avatars = JSON.parse(fs.readFileSync("data/avatars.json"));

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
console.log("MONGOURI", MONGO_URI);
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const assert = require("assert");

const batchImport = async () => {
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");
  try {
    const result = await db.collection("avatars").insertMany(avatars);
    assert.strictEqual(avatars.length, result.insertedCount);
  } catch (err) {
    console.log(err.message);
  }
  client.close();
};

batchImport();
