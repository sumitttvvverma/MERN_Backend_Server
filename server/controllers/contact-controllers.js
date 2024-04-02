const Contact = require('../models/contact-model');

const contactForm = async(req,res)=>{
    try {
      const {username,email,message} = req.body;  

      const emailExist = await Contact.findOne({email:email});
      if(emailExist){
        return res.status(400).json({msg:"email is already exist"});
      }

      const addMsg = await Contact.create({username,email,message}) 

      res.status(200).json({message:"message send successfully",Data:addMsg});

    } catch (error) {
      res.status(200).json({message:"message not delivered"});  
    }
}

module.exports=contactForm;