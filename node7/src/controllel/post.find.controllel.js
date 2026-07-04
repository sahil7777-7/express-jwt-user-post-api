const usermodel=require('../model/db.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const postmodel=require('../model/post.model')

async function userpost(req, res){

    if(req.cookies.token){
        const{username}=req.body
    
        const user=await usermodel.findOne({
           username
        })

        if(!user){
           return res.status(404).json({
              message:"user not found"

            })
        }

        const posts=await postmodel.find({
             author:user._id
        })

         res.status(200).json({
           posts
        })

    }
    else(
        res.status(401).json({
            message:"unathorized user"
        })
    )
}

module.exports = {
    userpost
};