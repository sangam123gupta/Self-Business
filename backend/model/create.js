const mongoose=require("mongoose");
const crete_schema=new mongoose.Schema({
    name:String,
    description:String,
    size:Number
},{timestamps:true} )
module.exports=mongoose.model("Create",crete_schema);