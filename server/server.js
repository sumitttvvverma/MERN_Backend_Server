require('dotenv').config();  //on top

const express = require('express');
const app= express();
const authRoute= require('./router/auth-router');
const connectDb= require('./utils/db');
// const errorMiddleware=require('./middlewares/error-middlewares');
const contactRoute=require('./router/contact-router');

//main middleware
app.use(express.json());


//u can 'mount' the router at a specific URl prefix
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);


// app.use(errorMiddleware);    //error middleware use k liye

//This one was by express only , and better to use router
app.get('/',(req,res)=>{
    res.status(200).send("Welcome to MERN")
})

const PORT=4004;

connectDb().then(()=>{

    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`);
    })
    
})