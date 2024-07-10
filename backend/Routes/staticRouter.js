const express = require('express');
const router = express.Router();

router.get('/signup',async(req,res)=>{
    return res.redirect("signup");
})

router.get('/signup',async(req,res)=>{
    return res.redirect("signup");
})

router.get('/login',async(req,res)=>{
    return res.redirect("login");
})

router.get('/createProduct',async(req,res)=>{
    return res.redirect("createProduct")
})
module.exports = router;