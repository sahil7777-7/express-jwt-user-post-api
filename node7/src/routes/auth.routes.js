const express= require('express')
const authcontrollel=require('../controllel/auth.controllel')
const userupdatecontrollel=require('../controllel/user.update.controllel')
const router=express.Router()

router.post('/register',authcontrollel.register)
router.post('/login',authcontrollel.login)
router.post('/logout',authcontrollel.logout)
router.get('/alluser',authcontrollel.allUser)
router.put('/updateuser',userupdatecontrollel.updateuser)



module.exports=router;