const Report = require("../../../schema/report");
const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.checkReportOnUser = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let riderId = tokenInfo(token);
    let postId = req.params.post_id;
    let user_id = req.params.user_id;

    let checkreport = null;
    checkreport = await Report.findOne({
      reported_On: user_id,
      report_post_id: postId,
      reported_by: riderId,
    });

    if (checkreport != null) res.json({ message: "reported" });
    else res.json({ message: "pending" });
    console.log("here report check", checkreport);
  } catch (err) {
    console.log(err);
  }
};
