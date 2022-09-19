
const bodyParser = require('body-parser');
const Users =require('../models/user.model');

module.exports.getAll=(req,resp)=>{
    Users.findAll((err,user)=>{
      if(err){
         resp.send(err)
      }else{
         resp.send({
            data:user,
            method:req.method
         });
      }
    });
}

module.exports.getUserById=(rep,resp)=>{
   const user_id =rep.params.id 
   Users.findById(user_id,(err,user)=>{
      if(err){
         resp.send(err)
      }else{
         resp.send({
            data:user,
            method:req.method
         });
      }
   });
}

module.exports._getUserById=(req,resp)=>{
   const user_id =req.params.id;
   Users.findById(user_id,(err,user)=>{
      if(err){
         resp.send(err)
      }else{
         resp.send({
            data:user,
            method:req.method
         });
      }
   });
}


/*
 Users.findById=(user_id,(err,user)=>{
      if(err){
         resp.send(err)
      }else{
         resp.send({
            data:user,
            method:req.method
         });
      }
   })

   */