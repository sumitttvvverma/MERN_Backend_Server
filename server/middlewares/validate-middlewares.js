const validate = (schema) => async(req,res,next) =>{              //schema>here signupSchema as argument
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const message= err.errors[0].message; 
        // console.log(message);
        res.status(400).json({msg:"validation error" , noti:message});

        //error-middleware PART
        // const status=422;
        // const extraDetails="Fill inputs properly";
        // const error ={
        //     status,
        //     message,
        //     extraDetails,
        // }
        // console.log(error)
        // next(error);

    }
}

module.exports = validate;                 //done 2nd setup of zod validator NOW goes to auth-router import both files