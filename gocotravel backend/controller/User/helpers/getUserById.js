const User = require("../../../schema/User");
var mongoose = require('mongoose');
exports.getUserById = async (req, res) => {
  try {
    var userId = mongoose.Types.ObjectId(req.params.rider_id);
    const user = await User.findById(userId);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
