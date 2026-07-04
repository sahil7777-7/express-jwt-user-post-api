const mongoose=require('mongoose')
const app = require("../app");

const postSchema=new mongoose.Schema({
    image:{
        type:String
    },
    caption:{
        type:String
    
    },
    postid:{
        type:Number,
        unique:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"catUser"
    }
})

const postmodel=mongoose.model('catPost',postSchema)

module.exports=postmodel