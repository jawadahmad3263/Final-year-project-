//here user can report on a rider and his post  
const Report = require("../../../schema/report");
const Post = require("../../../schema/Post");
const User = require("../../../schema/User");
const { tokenInfo } = require("../../helpers/tokenInfo");
 exports.postReport=async(req, res)=>{ 
  try{
    let token = req.headers['x-access-token'] || req.headers['authorization']; 
    let userId=tokenInfo(token);
    let userIdToReport=req.body.reported_id;
    const user = await User.findById(userIdToReport);
     const report = new Report({
         report_post_id:req.body.post_id,
         reported_by:userId,
         reported_On:userIdToReport,
         report_details:req.body.report_details,
         report_type:req.body.report_type,

      })
    user.reportcounter++;
    if(user.reportcounter>=20)
       user.isblock="true"
       user.save();
    
      const savedReport = await report.save();
      res.json(savedReport);
  } catch (err) {
      console.log(err);
    } 
  };  
 