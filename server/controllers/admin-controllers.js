const User = require("../models/user-model");
const Contact = require("../models/contact-model")

const getAllUsers =async(req,res,next)=>{
    try {
        const users = await User.find({},{password:0});
        if(!users || users.length===0){
        return res.status(404).json({msg:"No Users found"})
        }
        return res.status(200).json(users)
    } catch (error) {
            // res.status(400).json({msg:error});
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
        // res.status(400).json({msg:error});
        next(error);
    }
}


//for users
const deleteUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({msg:"User Deleted Successfully"});
    } catch (error) {
        next(error);
    }
}

//for edit/update to user
const getUserById=async(req,res)=>{         //to find which User and get it by id
    try {
       const id=req.params.id;
       const data = await User.findOne({_id:id},{password:0});
       return res.status(200).json(data);  
    } catch (error) {
       next(error);
    }
}
const updateUserById=async(req,res)=>{
    try {
        const id=req.params.id;
        const UpdateData=req.body;

        const updatedUser=await User.updateOne({_id:id},{ $set:UpdateData })
        return res.status(200).json({msg:updatedUser})
    } catch (error) {
        next(error);
    }
}

//to delete the contact
const deleteContactById=async(req,res)=>{
    try {
        const id=req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({msg:"Contact deleted successfully"})
    } catch (error) {
        next(error);        
    }
}

module.exports ={getAllUsers,getAllContacts,deleteUserById,getUserById,updateUserById,deleteContactById}