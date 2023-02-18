const mongoose=require('mongoose');

const ProductSchema=new mongoose.Schema({
    id:{
        type:Number, 
        required:true,
        unique:true
    },

    name:{
        type:String ,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true});

const Product=mongoose.model("Product" , ProductSchema);

module.exports=Product;