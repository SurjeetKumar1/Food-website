const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/foodData",{

}).then(()=>{
    console.log("connection is successfull")
}).catch((e)=>{
    console.log("no connection")
})