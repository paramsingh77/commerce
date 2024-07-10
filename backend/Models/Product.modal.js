const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    Name: { 
        type: String, 
        require:true,
        unique:true,
    },
    Price:{
        type:String,
        require:true,
    },
    ProductNumber: {
        type: Number,
        require:true,
    },
    ImgSrc:{ 
        type: String,
        require:true,
    },
    ProductDescription: {
        type:String,
        require:true,
    }
});

const Product = new mongoose.model('ProductModal',ProductSchema);

module.exports = Product;