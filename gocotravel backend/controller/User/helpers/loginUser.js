const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../../schema/User");

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.json({
        success: false,
        status: 400,
        Message: "Not a Valid Email",
      });
    //...................secret key
    const validPass = await bcrypt.compare(req.body.password, user.password);
    const token = await jwt.sign({ userId: user._id }, "123babar", {
      expiresIn: "82800s",
    });
    if (!validPass)
      return res.json({
        success: false,
        status: 400,
        Message: "Wrong Password",
      });
    if (req.body.email === "gocotravel917@gmail.com")
      res.json({
        Message: "admin",
        success: true,
        isAuthenticated: true,
        token: token,
        data: user,
      });
    else
      res.json({
        success: true,
        isAuthenticated: true,
        token: token,
        data: user,
      });
  } catch (err) {
    console.log(err);
  }
};
