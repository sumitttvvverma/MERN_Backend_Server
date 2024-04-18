require('dotenv').config();  //on top

const express = require('express');
const cors = require('cors')
const app= express();
const authRoute= require('./router/auth-router');
const connectDb= require('./utils/db');
const errorMiddleware=require('./middlewares/error-middlewares');
const contactRoute=require('./router/contact-router');
const serviceRoute=require('./router/service-router');
const adminRoute=require('./router/admin-router');

//lets tackle cors
//pass it when cors() didnt understand
const corsOptions ={
    origin:"http://localhost:5173",
    methods:"GET , POST , PUT , DELETE , PATCH , HEAD",
    Credentials:true,
}

app.use(cors(corsOptions));

//main middleware
app.use(express.json());


//u can 'mount' the router at a specific URl prefix
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);

//let'define admin route
app.use("/api/admin",adminRoute)

app.use(errorMiddleware);    //error middleware use k liye

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