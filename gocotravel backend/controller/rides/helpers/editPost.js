//here the rider edit his post/ride
const Post = require("../../../schema/Post");

exports.editPost = async (req, res) => {
  try {
    Post.findByIdAndUpdate(
      req.body.post_id,
      {
        pick_up_city: req.body.pick_up_city,
        drop_off_city: req.body.drop_off_city,
        pick_up_time: req.body.pick_up_time,
        pick_up_date: req.body.pick_up_date,
        available_seats: req.body.available_seats,
        charges: req.body.charges,
        description: req.body.description,
      },
      { new: true },
      function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send({ result, message: "Your post has been edited" });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
