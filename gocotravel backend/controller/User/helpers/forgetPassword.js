const User = require("../../../schema/User");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { send } = require("process");
const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
      api_key:"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"
    }
}))
exports.forgetPassword = async (req, res) => {
  try {
      crypto.randomBytes(32,(err,buffer)=>{
          if(err){
              console.log(err)
          }
          const token=buffer.toString("hex")
           User.findOne({ email: req.body.email }).then(user=>{
            if (!user) res.send({ message: "email not found" });
            else{
            user.resetToken=token;
            user.expireToken=Date.now()+3600000;
            user.save().then((result)=>{
                transporter.sendMail({
                    to:user.email,
                    from:"gocotravel917@gmail.com",
                    subject:"password reset",
                    html:`<p>You are requested for password reset</p>
                    <h5><a href="http://localhost:3000/reset/${token}">click here</a> to reset password</h5>
                    `,
                })
            });
            res.send({user,message:"found"});}  
          })
      })
    // const user = await User.findOne({ email: req.body.email });
   

    // else
  } catch (err) {
    console.log(err);
  }
};
