const Post = require("../../../schema/Post");
const User = require("../../../schema/User");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.rideHistory = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    var availedPosts = await Post.find({
      requestedUser: userId,
    });
    availedPosts = availedPosts.reverse();
    if(availedPosts.length>0)
    res.json({availedPosts,message:""});
    else
    res.json({availedPosts,message:"no history"});
  } catch (err) {
    console.log(err);
  }
};
