
const validate = (schema) => async(req,res,next) =>{              //schema>here signupSchema,loginSchema as argument
    try {
        const parseBody = await schema.parseAsync(req.body);      //here req.body data is input data what we feed  
        req.body = parseBody;
        next();
    } catch (err) {
        //way 1
        // const message= err.errors[0].message; 
        // console.log(message);
        // res.status(400).json({msg:"validation error" , noti:message});

        //way 2 error-middleware PART
        const status=422;
        const message="fill the inputs properly"
        const extraDetails=err.errors[0].message;

        const error ={
            status,
            message,
            extraDetails,
        }
        console.log(error);
        // res.status(400).json({message , extraDetails})
        next(error);        //pass krdi to error middleware k pass gya

    }
}

module.exports = validate;                 //done 2nd setup of zod validator NOW goes to auth-router import both files