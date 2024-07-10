const express = require('express');
const Product = require('../Models/Product.modal');

const router = express.Router();

router.post('/', async(req,res)=>{
    console.log(req.body);
    try{
        const newPrdouct = new Product({
            Name: req.body.Name,
            Price: req.body.Price,
            ProductNumber:  req.body.ProductNumber,
            ImgSrc: req.body.ImgSrc,
            ProductDescription: req.body.ProductDescription
        })
        const savedProduct = await newPrdouct.save();
        res.status(201).json(savedProduct);
    }
    catch{
        res.status(404).json({message : error.message})
    }
});

router.get('/',async(req,res)=>{
    try{
        const prods = await Product.find()
        res.status(201).json(prods)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/id/:id',async(req,res)=>{
    try{
        const prods = await Product.findById(req.params.id);
        if(!prods){
            res.status(404).json({message: "Product Not Found"})
        }
        res.status(200).json(prods);
    }
    catch(error){
        console.error("Error occurred:", error);
        res.status(500).json({ message: "Server Error" });
    }
})

router.get('/title/:title',async(req,res)=>{
    try {
        const name = req.params.title.toLowerCase().trim();
        console.log("Name:",name.trim());
        const allProducts = await Product.find({});
        let foundProduct = null;

        for(const pd of allProducts){
            console.log(pd.Name,name);
                if(pd.Name.toLowerCase() === name){
                    foundProduct = pd;
                    
                    break;
                }
        }

        if(!foundProduct){
            res.status(400).json("Product Not Found");
        }
        else {
            res.status(200).json(foundProduct);
        }
    }
    catch{
        console.error("Error:", err);
        res.status(500).json({ message: "Server Error" });
    }
})
router.get('/delete',async(req,res)=>{
    try {

        const d = await Product.deleteMany({});
        res.status(400).json({message:"Deleted Everything"});
    }
    catch{
        console.error("Error:", err);
        res.status(500).json({ message: "Server Error" });
    }
})

module.exports = router;