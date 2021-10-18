const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.AllPostsOfRider = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    const post = await Post.find({
      rider_id: userId,
      post_status: "complete",
    }).sort({ created_at: -1 });
    if (post != null) res.json({ post, success: true, message: "found" });
    else res.json({ message: "not found" });
  } catch (err) {
    console.log(err);
  }
};
