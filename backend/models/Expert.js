const mongoose=require("mongoose");
module.exports=mongoose.model("Expert",new mongoose.Schema({
name:String,
category:String,
experience:Number,
rating:Number,
slots:[String]
}));