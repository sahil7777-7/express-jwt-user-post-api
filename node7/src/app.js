const express=require('express')
const apiroutes=require('../src/routes/auth.routes')
const postroutes=require('../src/routes/post.routes')
const cookieParser=require('cookie-parser')
const app=express()
app.use(express.json())
app.use(cookieParser())

app.use('/api',apiroutes)
app.use('/api',postroutes)



module.exports=app