const adminMiddleware=async(req,res,next)=>{
    try {
        console.log(req.user)   //it comes from authMiddleware 
        const adminRole=req.user.isAdmin;   //admin is true or not
        if(!adminRole){
            return res.status(402).json({msg:"Admin denied. User is not an admin"});
        }
        // res.status(200).json({msg:req.user}); //if u do this it will return from here and its over here and crashed the backend 
        //if user is an admin, proceed to the next middleware
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = adminMiddleware;
//login first with admin true and copy token of it and then use admin Power