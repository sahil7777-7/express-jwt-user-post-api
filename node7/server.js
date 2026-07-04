require('dotenv').config()
const connectdb=require('./src/db/db')
const app=require('./src/app')


connectdb()

app.listen(3000,()=>{
    console.log("server run in port number 3000")
})