
const { tokenInfo } = require("../../helpers/tokenInfo");
exports.protectedRoute = async (req, res) => {
  try {
      
   // let token = req.headers["x-access-token"] || req.headers["authorization"];
      console.log("here in protected route")
        res.json({success:true});
    } 
   catch (err) {
    console.log(err);
  }
};
