const express = require("express");
const pullRoute=require("./routes/route")
const Poll=require("./data_base/db")
const app=express();


//app.use(express.json());

app.use("/api",pullRoute)



let port=process.env.PORT
if(port==null  || port =="")
{
    port=3000
}

app.listen(port,()=>{
    console.log("server is started at port 3000");
})