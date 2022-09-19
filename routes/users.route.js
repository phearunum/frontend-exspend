
const express = require('express');
const userRoute=express.Router();

const users=require('../controller/users.controller');

userRoute.get('/user',users.getAll);
userRoute.post('/user',users.getUserById)
userRoute.get('/user/:id',users.getUserById)

module.exports=userRoute;
