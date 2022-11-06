const mongoose=require("mongoose");
const category_schema=new mongoose.Schema({
    name:{
        require:true,
        type:String,
        trim:true,
        unique:true,
        maxlength:50

    }
},{timestamps:true} )
module.exports=mongoose.model("Category",category_schema);