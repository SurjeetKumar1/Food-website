const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({
    categoryName:String,
    name:String,
    img:String,
    Options:Array,
    description: String,

})

const FoodItem = mongoose.model('FoodItem', categorySchema);
module.exports =FoodItem;