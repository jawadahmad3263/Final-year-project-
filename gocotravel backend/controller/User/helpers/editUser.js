//here User can edit his personal information
const User = require("../../../schema/User");
const bcrypt = require("bcryptjs");
const { tokenInfo } = require("../../helpers/tokenInfo");

exports.editUser = async (req, res) => {
  console.log(req.body);
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    const user = await User.findById(userId);
    console.log("psswrd ", req.body.password);
    console.log("here req.body", req.body);
    //checking if cnic exist
    var cnicNumber;
    let userOfCnic = await User.findOne({ cnic: req.body.cnic });
    if (userOfCnic != null) {
      if (userOfCnic.cnic === user.cnic) {
        cnicNumber = req.body.cnic;
      } else {
        console.log("I got it here");
        return res
          .status(400)
          .send({ Message: "Wrong cnic its already exist in other user " });
      }
    } else {
      cnicNumber = req.body.cnic;
    }

    //checking if phone exist
    var phoneNumber;
    let userOfPhone = await User.findOne({ phone: req.body.phone });
    if (userOfPhone != null) {
      if (userOfPhone.phone === user.phone) {
        phoneNumber = req.body.phone;
      } else {
        return res.status(400).send({ Message: "phone number already exist" });
      }
    } else {
      phoneNumber = req.body.phone;
    }

    let newImage;
    if (req.file) newImage = "http://localhost:5000/" + req.file.filename;
    else newImage = user.image;

    //Hashing the password
    var hashPassword = user.password;
    if (req.body.password.length != 0) {
      const salt = await bcrypt.genSalt(10);
      hashPassword = await bcrypt.hash(req.body.password, salt);
    }

    //finding and editing the user info
    User.findByIdAndUpdate(
      userId,
      {
        name: req.body.name,
        password: hashPassword,
        image: newImage,
        address: req.body.address,
        cnic: cnicNumber,
        phone: phoneNumber,
        city: req.body.city,
      },
      { new: true },
      function (err, result) {
        console.log(err, "error");
        if (err) {
          res.send(err);
        } else {
          res.send({ result, Message: "Updated" });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
