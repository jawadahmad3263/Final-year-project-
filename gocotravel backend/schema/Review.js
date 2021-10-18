//review  table

const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const Review_Schema = new Schema({

  review_by:{type: Schema.Types.ObjectId, ref: 'User'},

  review_on:{type: Schema.Types.ObjectId, ref: 'User'},

  post_id:{type: Schema.Types.ObjectId, ref: 'Post'},

  review_number: {type: Number,required: true,},
  
  comment: {type: String},
  
});

module.exports=mongoose.model('Review',Review_Schema);