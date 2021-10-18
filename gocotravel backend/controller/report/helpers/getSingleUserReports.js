const Report = require("../../../schema/report");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.getSingleUserReports = async (req, res) => {
  try {
    console.log("hello here i am ");
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);

    var reports = await Report.find({ reported_On: userId });
    reports = reports.reverse();
    res.json(reports);
  } catch (err) {
    console.log(err);
  }
};
