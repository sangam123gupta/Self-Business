const express=require("express");
const router=express.Router();
// const { get_data,id_wise_data_gate }= require("../controler/controller");
const { signup,signin, signout }= require("../controler/auth_controller");
const { signup_validator } = require("../validator");

// router.get("/",get_data);
// router.get("/id_data_gate",id_wise_data_gate);
router.post('/signup', signup_validator ,signup);
router.post('/signin',signin)
router.get('/signout',signout)

module.exports=router;

