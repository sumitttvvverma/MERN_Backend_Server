const express = require("express");
const router=express.Router();
const {getAllUsers,getAllContacts}=require("../controllers/admin-controllers");


router.route("/users").get(getAllUsers);
router.route("/contacts").get(getAllContacts);

module.exports =router;