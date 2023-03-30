const mongoose=require("mongoose");
const dotenv=require('dotenv')
dotenv.config();

mongoose.connect('mongodb+srv://Collapmp3:collab123@cluster0.owjvkr5.mongodb.net/test').then(()=>{
    console.log("Mongoose connection successful")
}).catch((error)=>{
    console.log(`Error encountered: ${error}`)
})

