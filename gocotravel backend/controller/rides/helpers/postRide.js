const Post = require("../../../schema/Post");
const { tokenInfo } = require("../../helpers/tokenInfo");
const Vehical = require("../../../schema/vehical");
const User = require("../../../schema/User");

exports.postRide = async (req, res) => {
  try {
    let token = req.headers["x-access-token"] || req.headers["authorization"];
    let userId = tokenInfo(token);
    const vehical = await Vehical.findOne({ owener_id: userId });
    const user = await User.findOne({ _id: userId });
    if (user.isblock !=true) {
      if (!vehical)
        res.json({
          message: "first enter vehical info",
        });
      else {
        console.log("here position", user.currentPosition);
        if (user.currentPosition != true) {
          let carId = vehical._id;
          user.currentPosition = true;
          user.save();
          const post = new Post({
            rider_id: userId,
            car_id: carId,
            pick_up_city: req.body.pick_up_city,
            pick_up_point: req.body.pick_up_point,
            drop_off_city: req.body.drop_off_city,
            pick_up_time: req.body.pick_up_time,
            pick_up_date: req.body.pick_up_date,
            available_seats: req.body.available_seats,
            total_seats: req.body.available_seats,
            charges: req.body.charges,
            post_status: "active",
            description: req.body.description,
            customer_array: [],
            requestedUser: [],
          });

          const savedPostRide = await post.save();
          res.json({
            success: true,
            savedPostRide,
            Message: "Ride has been posted",
          });
        } else
          res.json({
            success: false,
            Message: "First complete or cancel previous ride",
          });
      }
    } else res.json({ success: false, Message: "your id is blocked" });
  } catch (err) {
    console.log(err);
  }
};
