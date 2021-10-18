const User = require("../../../schema/User");
const Post = require("../../../schema/Post");
var mongoose = require("mongoose");
const { post } = require("../../../routes");
exports.getRequestedUser = async (req, res) => {
  try {
    var userId = mongoose.Types.ObjectId(req.params.reqUser_id);
    var post_id = mongoose.Types.ObjectId(req.params.post_id);
    const post = await Post.findOne({ _id: post_id });
    var msg = "";
    //No one apply for the ride yet wait.. soon user will apply
    const arry = post.customer_array;

    const l = arry.length;
    console.log("length=", l);
    for (var i = 0; i <= l; i++) {
      if (arry[i] == req.params.reqUser_id) {
        msg = "found true";
        break;
      }
    }
    console.log("msg", msg);
    const user = await User.findById(userId);
    res.json({ user, message: msg });
  } catch (err) {
    console.log(err);
  }
};
