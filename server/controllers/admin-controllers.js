const User = require("../models/user-model");
const Contact = require("../models/contact-model")

const getAllUsers =async(req,res)=>{
    try {
        const users = await User.find();
        if(!users || users.length===0){
        return res.status(404).json({msg:"No Users found"})
        }
        return res.status(200).json(users)
    } catch (error) {
            res.status(400).json({msg:error});
            next(error);
    }
}


const getAllContacts =async(req,res)=>{
    try {
        const Contacts = await Contact.find();
        if(!Contacts || Contacts.length===0){
            return res.status(404).json({msg:"No Users found"})
        }
        return res.status(200).json(Contacts)
    } catch (error) {
        res.status(400).json({msg:error});
        next(error);
    }
}

module.exports ={getAllUsers,getAllContacts}