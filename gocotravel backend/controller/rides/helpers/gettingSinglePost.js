const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.gettingSinglePost = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);

    const post = await Post.findOne({
      rider_id: userId,
      $or: [
        { post_status: "active" },
        { post_status: "start" },
        { post_status: "full" },
      ],
    });
    if (post != null) {
      res.json({ post, success: true, message: "active post" });
    } else {
      const post = await Post.findOne({
        customer_array: userId,
        $or: [
          { post_status: "active" },
          { post_status: "start" },
          { post_status: "full" },
        ],
      });

      if (post != null) {
        res.json({ post, success: true, message: "availed post" });
      } else res.json({ message: "" });
    }
  } catch (err) {
    console.log(err);
  }
};
