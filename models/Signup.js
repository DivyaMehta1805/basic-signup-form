const mongoose=require("mongoose");
const SignupSchemaa= new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    contact:
    {
        type:Number,
        required:false
    },
    email:
    {
        type:String,
        required:false
    },
    gender:
    {
        type:String,
        required:false
    },
    service:
    {
        type:String,
        required:false
    },
    location:
    {
        type:String,
        required:false
    }

})
module.exports=mongoose.model('Signupp',SignupSchemaa);