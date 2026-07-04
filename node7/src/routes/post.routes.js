const express=require('express')
const router=express.Router()
const postcontrollel=require('../controllel/post.controllel')
const postfindcontrollel=require('../controllel/post.find.controllel')
const postdeletecontrollel=require('../controllel/post.delete.controllel')
const postupdatecontrollel=require('../controllel/post.update.controllel')





router.post('/mypost',postcontrollel.mypost)
router.get('/userpost',postfindcontrollel.userpost)
router.delete('/deletepost',postdeletecontrollel.deletepost)
router.put('/updatepost',postupdatecontrollel.updatepost)



module.exports=router;