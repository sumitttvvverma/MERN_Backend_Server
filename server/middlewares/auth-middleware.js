const jwt = require('jsonwebtoken');
const User = require("../models/user-model");

const authMiddleware = async(req,res,next)=>{   //#30 lec
    const token = req.header("Authorization");  //header not headers like login.jsx fetch block

    if(!token){
        //if you attempt to use an expired token, you'll receive a '401 unauthorized Http' response
       return res.status(401).json({msg:"Unauthorized HTTP,tokan not provided"});
    }
    // console.log("token form auth middleware ",token)

    //Assuming token is in the format "Bearer <jwtToken>", Removing the "Bearer" profix
    const jwtToken =token.replace("Bearer","").trim();
    // console.log("jwtToken = ",jwtToken)  //to know

    try {
        const isVerified= jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
        // console.log(isVerified);

        const userData=await User.findOne({email:isVerified.email}).select({
            password:0,
        });
        console.log(userData)

        req.user=userData;  //it goes to auth-controller > user > req.user
        req.token=token;
        req.userID=userData._id;

        next(); 
    } catch (error) {
        return res.status(401).json({msg:"Unauthorized. invalid token"})
    }

}

module.exports= authMiddleware;