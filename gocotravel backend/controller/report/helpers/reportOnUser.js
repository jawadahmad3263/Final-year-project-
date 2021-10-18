//here user can report on a rider and his post  
const Report = require("../../../schema/report");
//const Post = require("../../../schema/Post");
const User = require("../../../schema/User");
const { tokenInfo } = require("../../helpers/tokenInfo");
 exports.reportOnUser=async(req, res)=>{ 
  try{
    let token = req.headers['x-access-token'] || req.headers['authorization']; 
    let riderId=tokenInfo(token);
    let IdToReport=req.body.reported_id;
    const user = await User.findById(IdToReport);
   
     const report = new Report({
         report_post_id:req.body.post_id,
         reported_by:riderId,
         reported_On:IdToReport,
         report_details:req.body.report_details,
         report_type:req.body.report_type,

      })
    user.reportcounter++;
    if(user.reportcounter>=20)
     user.isblock="true";
     user.save();
    
      const savedReport = await report.save();
      res.json(savedReport);
  } catch (err) {
      console.log(err);
    } 
  };  
 