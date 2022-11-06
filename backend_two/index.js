const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const app = express();
const auth_router = require("./route/auth_route");
const category_router=require("./route/category_route");
const body_parser=require('body-parser');
const cookie=require("cookie-parser");
const expressValidator = require('express-validator');
const morgan=require("morgan");
const json_parser=body_parser.json();
require("dotenv").config();
console.log("env file data", process.env.PORT);
const port = process.env.PORT || 3000
app.use(body_parser.json());
app.use(cors());

app.use(cookie());
app.use(expressValidator());
app.use(morgan('dev'));
app.use(auth_router);
app.use(category_router); 

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("database is connected");
}).catch(()=>{
    console.log("database is not connected");
})
app.listen(5001, () => {
    console.log("running port ")
})
