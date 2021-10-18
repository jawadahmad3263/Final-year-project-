const User = require("../../../schema/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.registerUser = async (req, res) => {
  console.log("body", req.body);
  try {
    //checking if email exist ina database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      res.json({ Message: "Given email has been taken try different" });
    }
    //checking if cnic exist
    const cnicExist = await User.findOne({ cnic: req.body.cnic });
    if (cnicExist) {
      res.json({ Message: "Incorrect Cnic number" });
    }
    //checking if cnic exist
    const phoneExist = await User.findOne({ phone: req.body.phone });
    if (phoneExist) {
      res.json({ Message: "Given phone number is already use in other user " });
    }
    //Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    console.log("file", req.file);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      image: "http://localhost:5000/" + req.file.filename,
      address: req.body.address,
      cnic: req.body.cnic,
      phone: req.body.phone,
      city: req.body.city,
      reportcounter: 0,
      status: "active",
      isblock: false,
      currentPosition: false,
      reviewStars: 0,
      resetToken: null,
      expireToken: null,
    });

    const savedUser = await user.save();
    const token = await jwt.sign({ userId: user._id }, "123babar", {
      expiresIn: "324000s",
    });
    res.json({ savedUser, token: token, Message: "welcome" });
  } catch (err) {
    console.log(err);
  }
};
