const {postReport} = require("./helpers/postReport");
const {checkReport} = require("./helpers/checkReport");
const {reportOnUser} = require("./helpers/reportOnUser");
const {checkReportOnUser} = require("./helpers/checkReportOnUser");
const {getSingleUserReports} = require("./helpers/getSingleUserReports");
const {getSingleReportById} = require("./helpers/getSingleReportById")
const {getAllReports} = require("./helpers/getAllReports");
module.exports = {
    postReport:postReport,
    checkReport:checkReport,
    reportOnUser:reportOnUser,
    checkReportOnUser:checkReportOnUser,
    getSingleUserReports:getSingleUserReports,
    getSingleReportById:getSingleReportById,
    getAllReports:getAllReports,
    
}