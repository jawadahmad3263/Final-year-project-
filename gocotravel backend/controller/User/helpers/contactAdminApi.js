const { tokenInfo } = require("../../helpers/tokenInfo");
const User = require("../../../schema/User");
const FineRecipt = require("../../../schema/fineRecipt");
var mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { send } = require("process");
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        "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",
    },
  })
);
exports.contactAdminApi = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);

    const user = await User.findOne({ _id: userId });

    const fineRecipt = new FineRecipt({
      user_ID: userId,
      Recipt: "http://localhost:5000/" + req.file.filename,
    });
    fineRecipt.save();
    transporter.sendMail({
      to: "gocotravel917@gmail.com",
      from: "gocotravel917@gmail.com",
      subject: "Request for unblock profile",
      html: `<p>user ${user.name} is requesting for unblocking his Id
              <br />His/Her email is  ${user.email} and phone is ${user.phone}<br />
              <br />I have submitted the fine for unblocking my id
              </p>
               <h5><a href="http://localhost:3000/UnblockUserUi/${userId}"> click here</a> to see the recipt and unblock the user</h5>
              `,
    });
    res.json({ Message: "send succesfully" });
  } catch (err) {
    console.log(err);
  }
};
