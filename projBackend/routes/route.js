// const express=require("express");
// const { route } = require("express/lib/application");
// const router=express.Router();
//
// router.get("/",function(req,res){
//   res.send("sachin");
// });
//
// module.exports=router;


const express=require("express");
const { route } = require("express/lib/application");
const router=express.Router();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/pollDB");
const Poll=require("../data_base/db")



router.get("/getAllPolls",(req,res)=>{
res.send("landed on home_page");


});

router.get("/createpolls",(req,res)=>{
    res.send("landed on home_poll page");


    Poll.find(function(err,polls){
        if(err){
            console.log(err);
        }
        else{
            console.log(polls);
        }
    })
});

module.exports=router;
