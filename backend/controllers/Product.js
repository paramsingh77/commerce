const Product = require('../Models/Product.modal');

async function addProductToStock(req,res){
     console.log("reached next");
    const body = req.body;
    console.log(body.name,body.imgSrc,body.price,body.productNumber,body.textDescription);
    if(!body.name || !body.imgSrc || !body.price || !body.productNumber || !body.textDescription) {
        console.log("Field is missing");
        return res.status(400).json({message:"Product is Empty"});}

    await Product.create({
        Name: body.name,
        Price:body.price,
        ProductNumber:body.productNumber,
        ImgSrc: body.imgSrc,
        ProductDescription: body.textDescription
    });
    console.log("Detauls created");
    return res.redirect("http://localhost:3000/");
}

async function deleteProduct(req,res){
    try {
        console.log(req.body);
        const name = req.body.Name;
        console.log(name);
        const d = await Product.findOneAndDelete({Name: name});
        if(d){
            console.log("Deleted d");
            res.redirect("http://localhost:3000/")
        }
    } catch (err) {
            console.log("D don't exist");
            res.redirect("http://localhost:3000/login")
        console.log("Error fetching");
    }
   
  
}

module.exports = {addProductToStock , deleteProduct}