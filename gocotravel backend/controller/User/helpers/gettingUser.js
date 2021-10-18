const User = require("../../../schema/User");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.gettingUser = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    let userId = tokenInfo(token);

    const user = await User.findById(userId);

    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
