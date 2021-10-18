//here the rider will delete the users from a trip from conform user array
const Post = require("../../../schema/Post");
const User = require("../../../schema/User");
const { tokenInfo } = require("../../helpers/tokenInfo");

exports.deleteUserFromRide = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    const post = await Post.findById(req.body.post_id);
    post.customer_array.splice(req.body.user_id);
    const user = await User.findById(req.body.user_id);
    user.currentPosition = "false";
    user.save();
    post.available_seats++;
    if (post.available_seats > 0) post.post_status = "active";

    const savedUpdatedPost = await post.save();
    res.json(savedUpdatedPost);
  } catch (err) {
    console.log(err);
  }
};
