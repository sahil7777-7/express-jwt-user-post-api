const usermodel=require('../model/db.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()
const postmodel=require('../model/post.model')



async function mypost(req, res) {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"unathorized user"
        })

    }

    try{
        
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        const user=await usermodel.findById(decoded.id)
        console.log(user)

        await postmodel.create({
          postid:req.body.postid,
          image:req.body.image,
          caption:req.body.caption,
          author:user._id
        })
    }
    catch(err){
        console.log(err)
        return res.status(401).json({
            message:"unathorized user"
        })
    }
    


    res.status(200).json({
        message:"create post"
    })
}

module.exports = {
    mypost
};