
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
   const user_id =rep.body.id 
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
 module.exports._createUser=function(req,resp){
    const UserData=req.body;
    console.log(req)
    Users.CreateUser(req.body,(err,user)=>{
      if(err){
         resp.send(err)
      }else{
         resp.send({
            data:user,
            method:req.method
         });
      }
    })
 }

 module.exports._updareUser=function(req,resp){
   //const userData =new Users(req.body);
   const Data={
      'fname':req.body.fname,
      'lname':req.body.lname,
      'phone':req.body.phone,
    }
   Users.UpdateUser(req.body.id,Data,function(err,user){
      if(err){
         resp.send(err)
      }else{
         resp.send({
            data:user,
            method:req.method
         });
      }
   })
 }
 
 module.exports._deleteUser=function(req,resp){
   const user_id =req.body.id;
   Users.deleteUser(user_id, function(err,user){
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