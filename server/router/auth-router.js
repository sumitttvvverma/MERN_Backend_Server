const express =require('express');
const router =express.Router();
// const {home,register} =require("../controllers/auth-controllers")
const authcontrollers =require("../controllers/auth-controllers");
const {signupSchema,loginSchema} = require('../validators/auth-validator');
const validate = require('../middlewares/validate-middlewares');
const authMiddleware = require("../middlewares/auth-middleware");

//1.this is old router
router.get('/old',(req,res)=>{
    res.status(200).send("welcome to MERN by router")
})

//2.better to use this router syntax
//syntax way auth router only
// router.route('/').get((req,res)=>{
//     res.status(200).send("welcome to MERN by router ____ router.route")
// })

//3.syntax way auth router with auth controllers
// router.route('/').get(home);
router.route('/').get(authcontrollers.home);


//REGISTER
//2.syntax way auth router only
// router.route('/register').get((req,res)=>{
//     res.status(200).send("registeration open page");
// })

//3.syntax way auth router with auth controllers
// router.route('/register').get(register)
router.route('/register').post(validate(signupSchema),authcontrollers.register);         //add validate(arg...schema)

//LOGIN
router.route('/login').post(validate(loginSchema),authcontrollers.login);

//30 lec. jWT token verification middleware +creating Route to Get User Data from DB
router.route('/user').get(authMiddleware,authcontrollers.user);

module.exports = router;