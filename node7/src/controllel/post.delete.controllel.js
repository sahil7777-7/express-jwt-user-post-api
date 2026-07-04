const usermodel=require('../model/db.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const postmodel=require('../model/post.model')

async function deletepost(res,req){
    const{username,postid}=req.body
    
    const user=await usermodel.findOne({
        username
    })

    if(!user){
        return res.status(404).json({
            message:"user not found"

        })
    }

    const posts=await postmodel.findOne({
        postid:id
    
    })
    posts.deleteOne()

    res.status(200).json({
        message:"delete post"
    })

}

module.exports = {
    deletepost

}   