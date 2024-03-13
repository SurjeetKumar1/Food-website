const bcrypt = require('bcryptjs');
const express=require("express");
const FoodMember=require("./schema");
const fooditems = require("./foodItemSchema")
const Food=require("./FoodCetegorySchema");
require("./coonection")
const cors=require("cors");
const bodyParser=require("body-parser");
const app=express();
const port=5000||process.env.port
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

app.post("/signup",async(req,res)=>{
  try{
  const {name, email, password} = req.body;
  var salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  let foodMember = new FoodMember({name, email, password:hashedPass});
  const doc= await foodMember.save();
  res.status(200).json({message:"SignUp",doc});
}catch(e){
  res.send(e);
}
})

app.post("/login", async (req, res) => {
  try{
    const { email, password } = req.body;
    const foodMember = await FoodMember.findOne({ email });
    if (foodMember) {
      const isPasswordValid= await bcrypt.compare(password,foodMember.password)
      if(isPasswordValid){
        res.send({foodMember,message:"correct"})
      }
      else{
        res.send({err:"incorrect password",message:"wrong"})
        console.log("not valid")
      }
    } else {
      res.send({err:"User not found or incorrect password",message:"user  not found"});
      console.log("email not match")
  }
}catch(e){
  res.send(e);
}
  
})
    
app.post("/fooditems", async (req, res) => {
  try{
            console.log(req.body);
        const fooditem =new fooditems(req.body);
    
        const createuser=await fooditem.save();  
        res.status(201).send(createuser);
        }catch(e){
            res.status(400).send(e);
        }  
})


app.get("/fooditems", async (req, res) => {
  try{
    const fooditem = await fooditems.find();
    res.send(fooditem)
}catch(e){
  res.send(e);
}
  
})

app.get("/foodcategory", async (req, res) => {
  try{
    const foodcategory = await Food.find();
    res.send(foodcategory)
}catch(e){
  res.send(e);
}
  
})
app.listen(port,()=>{
    console.log("server is listing");
})