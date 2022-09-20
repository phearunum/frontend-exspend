
const express = require('express');
const userRoute=express.Router();

const users=require('../controller/users.controller');

userRoute.get('/user',users.getAll);
userRoute.post('/user',users.getUserById)
userRoute.get('/user/:id',users.getUserById)
userRoute.post('/user/create',users._createUser)
userRoute.post('/user/update',users._updareUser)
userRoute.post('/user/delete',users._deleteUser)


module.exports=userRoute;
