const User = require("../../../schema/User");
var mongoose = require("mongoose");
exports.blockUser = async (req, res) => {
  try {
    var userId = mongoose.Types.ObjectId(req.params.user_id);
    const user = await User.findById(userId);
    if (user) user.isblock = true;
    user.save();
    res.json({ message: "blocked" });
  } catch (err) {
    console.log(err);
  }
};
