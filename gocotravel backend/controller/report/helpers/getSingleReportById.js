var mongoose = require("mongoose");
const Report = require("../../../schema/report");
exports.getSingleReportById = async (req, res) => {
  try {
    console.log("hello here i am ");
    var repId = mongoose.Types.ObjectId(req.params.reportId);
    var report = await Report.findById(repId);
    res.json(report);
  } catch (err) {
    console.log(err);
  }
};
