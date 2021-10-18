const Vehical = require("../../../schema/vehical");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.gettingVehical = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    let userId = tokenInfo(token);
    const vehical = await Vehical.findOne({ owener_id: userId });
    console.log(vehical);

    if (vehical) {
      res.json(vehical);
    } else {
      res.json({ Message: "No_Vehical" });
    }
  } catch (err) {
    console.log(err);
  }
};
