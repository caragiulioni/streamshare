const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, JWT_SECRET } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const follow = async (req, res) => {
  const { userId, memberId } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");

  try {
    await db
      .collection("follows")
      .updateOne(
        { userID: ObjectId(userId) },
        { $push: { follows: memberId } }
      );
    return res.status(200).json({
      status: 200,
      success: true,
      msg: "now following!",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      data: req.body,
      msg: "unfollowed!",
    });
  }
};
const unfollow = async (req, res) => {};
module.exports = { follow, unfollow };
