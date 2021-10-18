//const jwt = require("jsonwebtoken");
//here the rider will confirm the users for a trip from requested users array
const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
const User = require("../../../schema/User");
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

exports.confirmUser = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);

    const post = await Post.findById(req.body.post_id);
    const rider = await User.findOne({ _id: post.rider_id });

    const accountSid  = "AC77ab4c3836957cc6103e37f5e826e6ab";
    const authToken = "2ecd35e606893a10e27169ac2f4cce57"
    const client = require('twilio')(accountSid,authToken);
    if (post.available_seats > 0) {
      //changing time format....
      var timeString = post.pick_up_time.slice(0, 9);
      var H = +timeString.substr(0, 2);
      var h = H % 12 || 12;
      var ampm = H < 12 || H === 24 ? "AM" : "PM";
      timeString = h + timeString.substr(2, 3) + ampm;
      var datee = post.pick_up_date.slice(0, 15);
      console.log(datee);
      //_______________________
      const selectedUser = req.body.user_id;
      post.customer_array.push(selectedUser);
      //making current position of customer to true so that he can not apply for another ride until complete or cancel ride
      const user = await User.findOne({ _id: selectedUser });
      user.currentPosition = "true";
      user.save().then((result) => {
        //sending mail to rider to inform him
        transporter.sendMail({
          to: user.email,
          from: "gocotravel917@gmail.com",
          subject: "Confirmation of Request",
          html: `<p>Your request for the ride has been confirmed</p>
        <h5>Ride Details:<br />${post.pick_up_city} to ${post.drop_off_city} <br />Date:${datee}
         ..Time:${timeString}<br/>
         Rider:${rider.name}<br />Rider Contact:${rider.phone}
        
        </h5>
        `,
        });
         //send sms to rider phone number
       
         var phone = user.phone;
         console.log("here phone is",phone)
        client.messages.create({
          body:"its a message from GocoTravel.. You have been confirm for the ride  you applied..Login to your accout check further detail about the ride.. Thanks",
          from:"+16158087014",
          to:phone,
        }).then(message=>console.log(message)).catch(err=>console.log(err))
      });
      //.................
      post.available_seats--;
      if (post.available_seats == 0) {
        post.post_status = "full";
      }
      const savedUpdatedPost = await post.save();
      res.json({ savedUpdatedPost, message: "has been added" });
    } else res.json({ message: "no_more_seats" });
  } catch (err) {
    console.log(err);
  }
};
