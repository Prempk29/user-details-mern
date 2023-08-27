const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();

const cors = require("cors");


const userRouter = require("./routes/userRoute")

// const User = require("./models/userModel");
const userModel = require("./models/userModel");
const { useActionData } = require("react-router-dom");
const app = express()
app.use(express.json())
app.use(cors());

mongoose.connect(process.env.URI)
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err)
})



app.use(userRouter) 




app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("on 5000");
});