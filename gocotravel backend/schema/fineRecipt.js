const mongoose = require("mongoose");
const { schema } = require("./Post");
const Schema=mongoose.Schema;

const FineRecipt_Schema = new Schema({
    user_ID:{type: Schema.Types.ObjectId, ref: 'User'},
    Recipt: { type: String},
    created_at: {type: Date,default: Date.now()},

});
module.exports=mongoose.model('fineRecipt',FineRecipt_Schema);