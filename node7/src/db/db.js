const mongoose=require('mongoose')
const app = require("../app");

async function connectdb() {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connect successfully")
    }
    catch(err){
        console.log("database connect error ",err)
    }

}

module.exports=connectdb