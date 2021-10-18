const Vehical = require("../../../schema/vehical");
var mongoose = require("mongoose");
exports.getPostVehical = async (req, res) => {
  console.log(",zmmx", req.params.car_id);
  try {
    var carId = mongoose.Types.ObjectId(req.params.car_id);

    const vehical = await Vehical.findOne({ _id: carId });

    if (vehical) {
      res.json(vehical);
    } else {
      res.json({ Message: "No_Vehical" });
      console.log(Message);
    }
  } catch (err) {
    console.log(err);
  }
};
