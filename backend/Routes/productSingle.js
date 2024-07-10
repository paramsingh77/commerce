const express = require('express');
const Product = require('../Models/Product.modal');

const routers = express.Router();

routers.get('/:number' , async(req,res)=>{

    const number = req.params.number;
    console.log(number);
    const d = await  Product.find({ProductNumber: number});
    if(d){
        res.status(200).json(d);
    }
    else res.status(400).json({message: "Not Present"});

})

module.exports = routers