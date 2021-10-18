const User = require("../../../schema/User");

exports.authenticateUser = async (req, res, next) => {
  try {
    const emails = await User.find().exec();

    res.send(emails);
  } catch (err) {
    console.log(err);
  }
};
