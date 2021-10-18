const User = require("../../../schema/User");
var mongoose = require('mongoose');
exports.getUserOfReportById = async (req, res) => {
  try {
    var userId = mongoose.Types.ObjectId(req.params.id);
    const user = await User.findById(userId);
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
