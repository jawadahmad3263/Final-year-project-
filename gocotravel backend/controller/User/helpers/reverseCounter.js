var mongoose = require('mongoose');
const User = require("../../../schema/User");
const nodemailer = require('nodemailer');
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { send } = require("process");
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
      api_key:"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"
    }
}))
exports.reverseCounter = async (req, res) => {
  try {
      
 const userId = mongoose.Types.ObjectId(req.params.userId);
 console.log("userid",userId)
    var user= await User.findById(userId);
    if(user){
        user.reportcounter--;
        user.save();
    
    transporter.sendMail({
        to:user.email,
        from:"gocotravel917@gmail.com",
        subject:"About Report",
        html:`<p>Congrats Mr ${user.name} Admin accept your claim about the report and considered it as wrong report<br /> your report counter is decreased </p>
        <p>However always be discipline,positive and follow the rules and guidline</p>
        `,
    })
     res.json({message:"decrease"});
    }
  }
  catch (err) {
    console.log(err);
  }
};
