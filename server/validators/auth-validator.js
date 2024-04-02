const { z }=require('zod');

//creating an object schema
const signupSchema = z.object({
    username:z
    .string({ required_error:"Name is required"})
    .trim()
    .min(3,{message:"name must be at least of 3 chars"})
    .max(255,{message:"name must not be more than 255 chars"}) ,
    
    email:z
    .string({ required_error:"email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"email must be at least of 3 chars"})
    .max(255,{message:"email must not be more than 255 chars"}) ,

    phone:z
    .string({ required_error:"phone is required"})
    .trim()
    .min(10,{message:"phone must be at least of 10 chars"})
    .max(15,{message:"phone must not be more than 15 chars"})  ,

    password:z
    .string({required_error:"password is required"})
    .min(5,{message:"password must be at least of 5 chars"})   
    .max(15,{message:"password must not be more than 15 chars"})  ,
});


module.exports = signupSchema ;      //goes to validate-middleware for second step, 1 is done 