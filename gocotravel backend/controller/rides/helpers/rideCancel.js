//when rider cancel the ride
const Post = require("../../../schema/Post");
const User = require("../../../schema/User");
const { tokenInfo } = require("../../helpers/tokenInfo");
var mongoose = require("mongoose");
exports.rideCancel = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    var postId = mongoose.Types.ObjectId(req.params.post_id);
    const post = await Post.findById(postId);

    post.post_status = "cancelled";
    //making rider currentposition to false so that he can post another ride
    const rider_id = post.rider_id;
    const user = await User.findOne({ _id: rider_id });
    user.currentPosition = false;
    console.log("jsjsk",user.currentPosition)
    user.save();
     //making users currentposition to false
     const arraylength = post.customer_array;
     for (var i = 0; i < arraylength.length; i++) {
       let user_id = post.customer_array[i];
       const user = await User.findOne({ _id: user_id });
       user.currentPosition = false;
       user.save();
     } //..................................

    const savedUpdatedPost = await post.save();
    res.json({ savedUpdatedPost, message: "cancelled" });
  } catch (err) {
    console.log(err);
  }
};
