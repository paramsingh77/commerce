const { getUser } = require('../service/auth')


async function restrictToLoggedinUserOnly(req,res,next){
    console.log("checked ");
    // check for cookies - if user is already login 
    const userUid = req.cookies?.uid;
    console.log(userUid);
    //if not redirect to login page
    if(!userUid){ 
        console.log("User not logged in 1");
        return res.redirect('http://localhost:3000/login')}
    
    //check if the user Exist , use getUser function to check as if the user exist or not.  
    const user =  getUser(userUid)
    console.log("User not: ",user);
    if(!user){
        console.log("User not logged in 2");
         return res.redirect('http://localhost:3000/login')}
    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly
}