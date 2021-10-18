
const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
const User = require("../../../schema/User");
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
exports.requestedUser = async (req, res) => {
  try { 
    const accountSid  = "AC77ab4c3836957cc6103e37f5e826e6ab";
    const authToken = "2ecd35e606893a10e27169ac2f4cce57"
    const client = require('twilio')(accountSid,authToken);
    var post_id = mongoose.Types.ObjectId(req.params.id);
    console.log(",.,.", post_id);
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    const user = await User.findOne({ _id: userId });
    const post = await Post.findById(post_id);
    const rider = await User.findOne({ _id: post.rider_id });
    console.log("id post is here", post);
    const foundUser = await post.requestedUser.indexOf(userId);
    if (user.isblock != true) {
      if (post.post_status !== "complete") {
        if (foundUser >= 0) res.json({ Message: "USER_ALREADY_APPLIED" });
        else {
          post.requestedUser.push(userId);

          post.save().then((result) => {
            //sending mail to rider to inform him
            transporter.sendMail({
              to: rider.email,
              from: "gocotravel917@gmail.com",
              subject: "User Request",
              html: `<p>You got request from/${user.name} for the ride to avail
              <br />for any query or info you can contact him through ${user.phone}
              </p>
              <h5>click on this<a href="http://localhost:3000/activeRide"> link </a>to confirm him/her</h5>
              `,
            });
            //send sms to rider phone number
            // let plus="+92";
            // let phone = rider.phone;
            // var ph = plus.concat(phone);
           client.messages.create({
             body:"its a message from GocoTravel.. You got request from user for the ride to avail..Login to ur Account to check his/her detail and confirm the user",
             from:"+16158087014",
             to: rider.phone,
           }).then(message=>console.log(message)).catch(err=>console.log(err))
          });
          res.json({
            post,
            Message: "congrats you have been added wait till rider confirm you",
          });
        }
      } else res.json({ Message: "Ride_donne_OR_seats_full" });
    } else {
      res.json({ Message: "your id is blocked can not avail ride" });
    }
  } catch (err) {
    console.log(err);
  }
};
