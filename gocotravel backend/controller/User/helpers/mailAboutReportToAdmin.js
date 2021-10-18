
const { tokenInfo } = require("../../helpers/tokenInfo");
const User = require("../../../schema/User");
const Report = require("../../../schema/report");
var mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { send } = require("process");
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
      api_key:"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"
    }
}))
exports.mailAbtReportToAdmin = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    const user = await User.findOne({ _id: userId });
    const mailText=req.body.mailText;
    // var reportId = mongoose.Types.ObjectId(req.body.report_id);
    const reportId=req.body.report_id
    var report = await Report.findOne({_id:reportId});
     console.log("report is",report)
            transporter.sendMail({
              to:"gocotravel917@gmail.com",
              from:"gocotravel917@gmail.com",
              subject:"About Report",
              html:`<p>user ${user.name} claim about the report is wrong<br />user email is ${user.email}</p>
              <br />${mailText}<br />
              <h5><a href="http://localhost:3000/reportDel/${reportId}">click here to see the given report and take a descion </a></h5>
              `,
          })
          res.json({Message:"send succesfully"});
        }
    
    
   catch (err) {
    console.log(err);
  }
};
