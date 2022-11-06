const express=require("express");
const route=express.Router()
const { create_category,Create,Delete_data,list } = require("../controler/category_controller");
const { stripe } =require("../controler/stripe")
const {user_by_id}=require("../controler/user");
const {requireSignin ,isAuth,is_admin }=require("../controler/auth_controller")
route.post('/category/create/:user_id',requireSignin,isAuth, is_admin,create_category );
route.param('user_id',user_by_id);
route.post('/create',Create);
route.delete('/delete',Delete_data);
route.get('/list',list);
route.post('/stripe',stripe);
module.exports=route;