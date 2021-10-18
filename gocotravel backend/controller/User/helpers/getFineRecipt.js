const FineRecipt = require("../../../schema/fineRecipt");
var mongoose = require("mongoose");
exports.getFineRecipt = async (req, res) => {
  try {
    var userId = mongoose.Types.ObjectId(req.params.id);
    const fineRecipt = await FineRecipt.findOne({ user_ID: userId });
    res.json(fineRecipt);
  } catch (err) {
    console.log(err);
  }
};
