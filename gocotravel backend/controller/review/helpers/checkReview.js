//here rider can review on the users
const Review = require("../../../schema/Review");
const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.checkReview = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    let postId = req.params.post_id;

    const post = await Post.findById(postId);
    const riderId = post.rider_id;
    let checkreview = null;
    checkreview = await Review.findOne({
      review_on: riderId,
      post_id: postId,
      review_by: userId,
    });

    if (checkreview != null) res.json({ message: "reviewed" });
    else res.json({ message: "pending" });
  } catch (err) {
    console.log(err);
  }
};
