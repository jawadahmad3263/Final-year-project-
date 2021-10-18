//vehical registration form
const jwt = require("jsonwebtoken");
const Vehical = require("../../../schema/vehical");
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.registerVehical = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    console.log("here vehical body",req.body)
    const car = await Vehical.findOne({ owener_id: userId });
    if (car)
      return res
        .status(400)
        .send({Message:
          "You already registered a vehical if want to change try edit option"
        });
    //checking if car number exist in a database
    const carNumberExist = await Vehical.findOne({
      car_number: req.body.car_number,
    });
    if (carNumberExist)
      return res.json({
        success:false,
        status:400,
        Message:"Car number entered is already registered here"
      })
    //checking if given licence number exist in a database
    const licenceNumberExist = await Vehical.findOne({
      licence_number: req.body.licence_number,
    });
    if (licenceNumberExist)
    return res.json({
      success:false,
      status:400,
      Message:"Given licence number already registered here"
    })

    const vehical = new Vehical({
      owener_id: userId,
      car_number: req.body.car_number,
      car_type: req.body.car_type,
      car_color: req.body.car_color,
      licence_number: req.body.licence_number,
      car_image:"http://localhost:5000/" + req.file.filename,
    });

    const savedVehical = await vehical.save();  
    res.json({success:true,savedVehical,Message:"Vehical has been posted"});
  } catch (err) {
    console.log(err);
  }
};
