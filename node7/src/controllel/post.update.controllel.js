const usermodel=require('../model/db.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const postmodel=require('../model/post.model')

async function updatepost(req, res){
    if(req.cookies.token){
        const{postid,image,caption}=req.body

        const post1=await postmodel.findOne({
           postid
        })
        post1.image=image
        post1.caption=caption
        await post1.save()
        res.status(200).json({
           message:"update post",
           post1
        })
    }
    else(
        res.status(401).json({
            message:"unathorized user"
        })
    )
}

module.exports = {
    updatepost
};