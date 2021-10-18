const User = require("../../../schema/User");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.getAllUsers = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    var users = await User.find();
    users = users.reverse();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};
