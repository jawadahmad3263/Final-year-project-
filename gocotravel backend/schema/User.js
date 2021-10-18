//User table

const mongoose = require("mongoose");
const { schema } = require("./Post");
const Schema=mongoose.Schema;

const User_Schema = new Schema({

  name: {type: String,required: true,},

  email: {type: String,required: true,unique:true},

  password: {type: String, required:true},
  resetToken: {type: String},
  expireToken:{type:Date},
 // createdAt: {type: Date,default: Date.now()},

  image: { type: String },
  
  
  
  address: {type: String, required:true},
  
  cnic: {  type: String,required:true,unique:true},
  
  reportcounter: {type: Number},

  status: {type: String,},

  isblock: {type: Boolean},

  phone: {type: String},

  city: {type: String, required:true},

  currentPosition:{type:Boolean},
  reviewStars:{type:Number}

});

module.exports=mongoose.model('user',User_Schema);
