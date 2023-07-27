const mongoose = require("mongoose");

const DetailSchema = new mongoose.Schema({
    FirstName:String,
    LastName:String,
    Username:String,
    City:String,
    State:String,
    Pin:Number,
})

const Detail = mongoose.model('ServiceDetails',DetailSchema)
module.exports = Detail;