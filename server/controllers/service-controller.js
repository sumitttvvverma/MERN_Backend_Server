const Service = require("../models/service-model");

const services = async(req,res)=>{
   try {
    const response = await Service.find();

    if(!response){
    return res.status(404).json({msg:"no service found"});    
    }
    res.status(200).json({msg:response});

   } catch (error) {
    res.status(400).json({error});
   } 

}

module.exports= services;