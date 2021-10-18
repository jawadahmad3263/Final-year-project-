const Report = require("../../../schema/report");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.getAllReports = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    var reports = await Report.find();
    reports = reports.reverse();
    res.json(reports);
  } catch (err) {
    console.log(err);
  }
};
