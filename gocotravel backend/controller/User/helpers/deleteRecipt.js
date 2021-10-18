const FineRecipt = require("../../../schema/fineRecipt");
var mongoose = require("mongoose");
exports.deleteRecipt = async (req, res) => {
  try {
    var Id = mongoose.Types.ObjectId(req.params.recipt_id);
    const fineRecipt = await FineRecipt.deleteOne({ _id: Id });
    res.json({ message: "recipt deleted" });
  } catch (err) {
    console.log(err);
  }
};
