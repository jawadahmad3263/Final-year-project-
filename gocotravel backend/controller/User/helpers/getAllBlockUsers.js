const User = require("../../../schema/User");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.getAllBlockUsers = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    const blockUsers = await User.find({ isblock: true });

    res.json(blockUsers);
  } catch (err) {
    console.log(err);
  }
};
