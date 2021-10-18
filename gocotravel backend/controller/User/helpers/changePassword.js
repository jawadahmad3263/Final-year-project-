const User = require("../../../schema/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.changePassword = async (req, res) => {
  try {
    const salt = bcrypt.genSalt(10);
    const newPassword = req.body.password;
    const sentToken = req.body.token;
    User.findOne({ resetToken: sentToken, expireToken: { $gt: Date.now() } })
      .then((user) => {
        if (!user) {
          return res.json({ message: "Try again" });
        }
        bcrypt.hash(newPassword, 12).then((hashedpassword) => {
          user.password = hashedpassword;
          user.resetToken = undefined;
          user.expireToken = undefined;
          user.save().then((saveduser) => {
            res.json({ message: "password updated successfully" });
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
};
