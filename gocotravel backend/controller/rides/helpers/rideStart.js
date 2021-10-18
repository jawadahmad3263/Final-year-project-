//when rider cancel the ride
const Post = require("../../../schema/Post");
var mongoose = require("mongoose");
exports.rideStart = async (req, res) => {
  try {
    console.log("here in ride start api");

    var postId = mongoose.Types.ObjectId(req.params.post_id);
    const post = await Post.findById(postId);

    post.post_status = "start";
    const savedUpdatedPost = await post.save();
    res.json({
      savedUpdatedPost,
      success: true,
      message: "Ride has been start,Have a safe journey ",
    });
  } catch (err) {
    console.log(err);
  }
};
