const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require("dotenv")
const bodyParser = require("body-parser");
const cors=require("cors")

app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
dotenv.config()

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Db connected")
})

app.use('/Details',require("./service.js"));
app.use('/FeedBack',require("./feedback.js"));
app.listen(3000,()=>{
    console.log("connected")
})