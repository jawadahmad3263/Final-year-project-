//here rider can review on the users
const Report = require("../../../schema/report");
const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.checkReport = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    let postId = req.params.post_id;

    const post = await Post.findById(postId);
    const riderId = post.rider_id;
    let checkreport = null;
    checkreport = await Report.findOne({
      reported_On: riderId,
      report_post_id: postId,
      reported_by: userId,
    });

    if (checkreport != null) res.json({ message: "reported" });
    else res.json({ message: "pending" });
    console.log("here report check", checkreport);
  } catch (err) {
    console.log(err);
  }
};
