//here the rider edit or change his vehical
const Vehical = require("../../../schema/vehical");
const { tokenInfo } = require("../../helpers/tokenInfo");

exports.editVehical = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);

    //checking image
    let newImage;
    if (req.file) newImage = "http://localhost:5000/" + req.file.filename;
    else newImage = user.image;

    Vehical.findByIdAndUpdate(
      req.body.vehical_id,
      {
        car_number: req.body.car_number,
        car_type: req.body.car_type,
        car_color: req.body.car_color,
        licence_number: req.body.licence_number,
        car_image: newImage,
      },
      { new: true },
      function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            result,
            Message: "Vehical has been changed",
            success: true,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
