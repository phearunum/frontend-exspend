
const Users =require('../models/user.model');
module.exports.getAll=(req,resp)=>{
    Users.findAll((err,user)=>{
      if(err){
         resp.send(err)
      }else{
         resp.send({
            data:user,
            method:req.method
         })
      }
    });
}
