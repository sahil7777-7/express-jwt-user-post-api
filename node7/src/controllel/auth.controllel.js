const usermodel=require('../model/db.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()


function mytoken(user,res){
        const token=jwt.sign({
        id:user._id,

    },process.env.JWT_SECRET_KEY)

    res.cookie('token',token)
}

async function register(req, res) {
    const { username, email, password } = req.body;

    const isEmailExist=await usermodel.findOne({
        email
    })
    if(isEmailExist){
        return res.status(409).json({
            message:"Email already exits"
        })

    }

    const isuserExist=await usermodel.findOne({
        username
    })
    if(isuserExist){
        return res.status(409).json({
            message:"username already exits"
        })

    }

    const user=await usermodel.create({
        username,
        email,
        password
    
    })

    // mytoken(user,res)

    res.status(201).json({
        message:"user register successfully",
        user
    })
}



async function allUser(req,res){
    const user=await usermodel.find()
    res.status(200).json({
        message:"all user and token",
        user,
        token:req.cookies.token
    })
}

async function login(req, res,){
    const{email,password}=req.body
    
    const user=await usermodel.findOne({
        email
    })

    if(!user){
        return res.status(404).json({
            message:"user not found"

        })
    }
    if(user.password!==password){
        return res.status(401).json({
            message:"invalid password"
        })
    }
    mytoken(user,res)
    res.status(200).json({
        message:"user login successfully",
        user
    })

}

async function logout(req,res) {
    res.clearCookie('token')
    res.status(200).json({
        message:"user logout successfully"
    })
}
    

module.exports = {
    register,
    allUser,
    login,
    logout

};