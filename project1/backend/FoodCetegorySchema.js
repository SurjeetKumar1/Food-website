const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({
    categoryName:String
})

const Food = mongoose.model('Food', categorySchema);
module.exports =Food;