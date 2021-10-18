const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
const moment = require("moment");
exports.searchPosts = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    const posts = await Post.find({
      pick_up_city: req.params.pick_up_city,
      drop_off_city: req.params.drop_off_city,
      pick_up_date: req.params.pickUpDate,
      pick_up_time: { $gte: req.params.pickUpTime },
      post_status: "active",
    });
    console.log(posts);

    res.json(posts);
  } catch (err) {
    console.log(err);
  }
};
