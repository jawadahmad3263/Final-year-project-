//vehical  table

const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const Vehical_Schema = new Schema({

  owener_id:{type: Schema.Types.ObjectId, ref: 'User'},

  car_number: {type: String,required: true,unique:true},
  
  car_type: {type: String, required:true},
  
  car_color: {type: String, required:true},

  licence_number: {type: String, required:true,unique:true},

  car_image: { type: String },
  
});

module.exports=mongoose.model('Vehical',Vehical_Schema);