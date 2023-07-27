const mongoose = require("mongoose");

const FeedBackSchema = new mongoose.Schema({
    Fname :String,
    Lname:String,
    Country:String,
    Subject:String,
})

const FeedBack = mongoose.model('FeedBackSchema',FeedBackSchema)
module.exports = FeedBack;