const express = require("express");
const routes = express.Router();
const FeedBack = require("./Models/feedback");

routes.post('/create',async(req,res)=>{
    console.log("hello")
    try{
        const list = await FeedBack.insertMany(req.body);
        res.send({list});
        console.log({list});
        console.log("hello")

    }catch(err) {
        return res.status(500).json({
            msg:"Internet Server Error"
        })
    }
})


module.exports = routes;