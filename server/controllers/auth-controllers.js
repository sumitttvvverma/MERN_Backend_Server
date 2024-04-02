const User = require('../models/user-model');
const bcrypt = require('bcryptjs');

const home= async(req,res)=>{
   try {
    res.status(200).send("welcoming in auth-controllers of controller")
   } catch (error) {
    console.log(error);
   }
}

//REGISTER
const register= async(req,res)=>{
    try {
   //  res.status(200).send("welcoming in auth-controllers of controller : registeration")
    console.log(req.body); 
   //  const data =req.body;
   //  res.status(200).json({ data });          //if we dont have model schema then we do on postman add header key-value >> Content-Type-application/json 
    
    const {username,email,phone,password}=req.body
    
    const userExist = await User.findOne({ email: email });

    if(userExist){
      return res.status(400).json({msg:"email is already exist"})
    }
  
    //hash the password using bcrypt method1
    const saltRound=10;
    const hash_Password= await bcrypt.hash(password,saltRound);

   const userCreated = await User.create({username,email,phone,password:hash_Password});

    res.status(200).json({
      // msg: userCreated   // >> after get token and userId og userCreated we dont need to show our data in output 
      msg:"registeration successful", 
      token : await userCreated.generateToken(),   //jsonwebtoken
      userId: userCreated._id.toString(),          //_id of userCreated  
    });
   
  } catch (error) {
     console.error(error) 
     res.status(500).send({msg:"internal server error"})
     
    // next(error);     //for error-middleware 
    }
 }

//LOGIN
const login =async(req,res)=>{
  try {
    const {email,password}=req.body;

    const userExist= await User.findOne({email:email});
    // console.log(userExist);

    if(!userExist){
     res.status(400).json({msg:"Invaild Credentials"})
    }

    //method 1
    const user = await bcrypt.compare(password,userExist.password);
    //method 2 of compare password and his second part in user-model
    // const user = await userExist.comparePassword(password);

    if(user){
      res.status(200).json({
        msg:"Login Successful",
        // msg2:userExist,
        token: await userExist.generateToken(),
        userId: await userExist._id.toString(),
      })
    }else{
      res.status(401).json({msg:"Invaild email or password"})
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
}

module.exports={home,register,login};