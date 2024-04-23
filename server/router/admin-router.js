const express = require("express");
const router=express.Router();
const adminController=require("../controllers/admin-controllers");
const authMiddleware = require("../middlewares/auth-middleware") //jwt token
const adminMiddleware=require("../middlewares/admin-middleware")

router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers);  //first PostMethodOFlogin then login success in res, through postman copy token bearer add in header then u got data ,adminMiddleware only show admins
router.route("/contacts").get(authMiddleware,adminMiddleware,adminController.getAllContacts);

//to delete the user
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserById)

//for Update/Edit to user
router.route("/users/:id").get(authMiddleware,adminMiddleware,adminController.getUserById)
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,adminController.updateUserById);

//to delete the Contact
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteContactById)

module.exports =router;