const mongoose=require("mongoose");
const validator=require("validator");
const foodDataschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlenght:3
    },
    email:{
        type:String,
        require:true,
        valiadte(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid error")
            }
        }
    },
    password:{
        type:String,
        require:true
    }
})

const FoodMember=mongoose.model('FoodMember',foodDataschema);
module.exports=FoodMember;