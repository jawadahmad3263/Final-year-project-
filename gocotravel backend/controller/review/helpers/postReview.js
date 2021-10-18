//here user can review on the ride they avail
const Review = require("../../../schema/Review");
const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.postReview = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    const post = await Post.findById(req.body.post_id);
    const foundUser = await post.customer_array.indexOf(userId);
    console.log(foundUser);
    if (post.post_status == "complete") {
      if (foundUser >= 0) {
        const review = new Review({
          reviewer_id: userId,
          review_post_id: req.body.post_id,
          review_number: req.body.review_number,
          comment: req.body.comment,
        });

        const savedReview = await review.save();
        res.json(savedReview);
      } else res.json({ message: "You can not post a review on this ride" });
    } else {
      res.json({ message: "let the ride complete first then review" });
    }
  } catch (err) {
    console.log(err);
  }
};
