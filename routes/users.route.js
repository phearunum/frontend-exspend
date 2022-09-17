
const express = require('express');
const userRoute=express.Router();

const users=require('../controller/users.controller');

userRoute.get('/user',users.getAll);
module.exports=userRoute;