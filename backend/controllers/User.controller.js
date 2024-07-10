const User = require("../Models/User.modal");
const {v4:uuidv4} = require('uuid');
const { setUser , getUser } = require('../service/auth');

async function handleUserSignUp(req,res){
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password
    });
    return res.redirect(`http://localhost:3000/`)
    // return res.send("Registered");
}
async function handleUserLogin(req,res){
    console.log("Entered the handlerrr");
    const {email, password} = req.body;
    console.log(email,password);
    const user  = await User.findOne({email,password});
    if(!user){
        console.log("if condition");
        return res.redirect("http://localhost:3000/login")
    }
    console.log("in else conditino");
    const sessionId = uuidv4();
    setUser(sessionId,user);
    res.cookie('uid',sessionId);
    return res.redirect(`http://localhost:3000/`)
    
   
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}

