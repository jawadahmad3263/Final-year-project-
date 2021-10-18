//here rider can review on the users
const Review = require("../../../schema/Review");
const Post = require("../../../schema/Post");
const User = require("../../../schema/User");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.riderReview = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    let postId = req.body.post_id;

    console.log(userId);
    const post = await Post.findById(postId);
    const riderId = post.rider_id;
    if (post.post_status == "complete") {
      const review = new Review({
        review_by: userId,
        review_on: riderId,
        post_id: postId,
        review_number: req.body.review_number,
        comment: req.body.comment,
      });
      const user = await User.findById(riderId);
      user.reviewStars = user.reviewStars + req.body.review_number;
      user.save();

      const savedReview = await review.save();
      res.json(savedReview);
    } else {
      res.json({ message: "let the ride complete first then review" });
    }
  } catch (err) {
    console.log(err);
  }
};
