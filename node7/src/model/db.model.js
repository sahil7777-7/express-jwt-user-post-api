const mongoose=require('mongoose')
const app = require("../app");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const usermodel=mongoose.model('catUser',userSchema)

module.exports=usermodel