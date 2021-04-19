const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, JWT_SECRET } = process.env;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const getFollowing = async (req, res) => {
  const userId = req.params.userId;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");
  let memberData;
  try {
    const following = await db
      .collection("follows")
      .findOne({ userID: ObjectId(userId) })
      .then(async (following) => {
        const arr = following.follows;
        const newArr = arr.map((item) => {
          return ObjectId(item);
        });

        const obj = await db
          .collection("users")
          .find({ _id: { $in: newArr } })
          .toArray();

        memberData = obj.map((item) => {
          return {
            _id: item._id,
            username: item.username,
            avatar: item.avatar,
          };
        });
      });
    res.status(200).json({
      status: 200,
      success: true,
      data: memberData,
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      data: req.body,
      msg: "could not get following.",
    });
  }
  client.close();
};

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
      msg: "could not follow.",
    });
  }
  client.close();
};
const unfollow = async (req, res) => {
  const { userId, memberId } = req.body;
  const client = await MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("streamshare");

  try {
    await db
      .collection("follows")
      .updateOne(
        { userID: ObjectId(userId) },
        { $pull: { follows: memberId } }
      );

    res.status(200).json({
      status: 200,
      success: true,
      msg: "unfollowed",
    });
  } catch (err) {
    res.status(400).json({
      status: 400,
      data: req.body,
      msg: "could not unfollow.",
      err: err,
    });
  }

  client.close();
};
module.exports = { getFollowing, follow, unfollow };
