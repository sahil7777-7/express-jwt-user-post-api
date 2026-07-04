const usermodel=require('../model/db.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()

async function updateuser(req,res){


    if(req.cookies.token){
        const decoded=jwt.verify(req.cookies.token,process.env.JWT_SECRET_KEY)
        const user=await usermodel.findById(decoded.id);

        user.username=req.body.username
        user.email=req.body.email
        user.password=req.body.password
        await user.save()

        res.status(200).json({
            message:"update user",
            user
        
        })
    }
}
module.exports={
    updateuser
}