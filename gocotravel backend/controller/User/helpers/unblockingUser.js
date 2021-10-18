const User = require("../../../schema/User");
var mongoose = require('mongoose');
exports.unblockUser = async (req, res) => {
  try {
    var userId = mongoose.Types.ObjectId(req.params.user_id);
    const user = await User.findById(userId);
    if(user)
    user.isblock=false;
    user.reportcounter=10;
    user.save();
    res.json({message:"unblocked"});
  } catch (err) {
    console.log(err);
  }
};
