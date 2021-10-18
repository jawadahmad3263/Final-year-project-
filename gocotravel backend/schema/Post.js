//post request table

const mongoose = require("mongoose");
const { schema } = require("./report");
const Schema = mongoose.Schema;

const Post_Schema = new Schema({
  rider_id: { type: Schema.Types.ObjectId, ref: "User" },

  car_id: { type: Schema.Types.ObjectId, ref: "Vehical" },

  pick_up_city: { type: String, required: true },

  pick_up_point: { type: String, required: true },
  drop_off_city: { type: String, required: true },

  pick_up_date: { type: String, required: true },

  pick_up_time: { type: String, required: true },

  available_seats: { type: Number, required: true },

  total_seats: { type: Number },
  charges: { type: Number, required: true },

  post_status: { type: String },

  customer_array: [{ type: Schema.Types.ObjectId, ref: "User" }],

  requestedUser: [{ type: Schema.Types.ObjectId, ref: "User" }],

  description: { type: String },
 created_at: {type: Date,default: Date.now()},
});

module.exports = mongoose.model("Post", Post_Schema);
