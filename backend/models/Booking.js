const mongoose=require("mongoose");
module.exports=mongoose.model("Booking",new mongoose.Schema({
expertId:String,
name:String,
email:String,
phone:String,
date:String,
timeSlot:String,
status:{type:String,default:"Pending"}
}));