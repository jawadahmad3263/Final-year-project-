//report  table

const mongoose = require("mongoose");
const Schema=mongoose.Schema;



const Report_Schema = new Schema({

  report_post_id:{type: Schema.Types.ObjectId, ref: 'Post'},

  reported_by:{type: Schema.Types.ObjectId, ref: 'User'},
  
  reported_On:{type: Schema.Types.ObjectId, ref: 'User'},
  
  report_details: {type: String,required: true,},
  
  report_type: {type: String, required:true},

  created_at: {type: Date,default: Date.now()},
});

module.exports=mongoose.model('Report', Report_Schema);