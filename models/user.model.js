
const dbConnect= require('../config/db.config');
const Users =function (user){
 this.id =user.id;
 this.fname=user.fname;
 this.lname=user.lname;
 this.username=user.username;
};
const table ="sys_users";

/* Select All Records*/
Users.findAll=  function (res){
    dbConnect.query(` select * from ${table}`, (err,rows)=>{
        if(err) throw err;
        res(null,rows[0]);
    });
};

/* Select one */
Users.findById= function(id,resp){
    dbConnect.query(`select * from ${table} WHERE id=?`,[id],function(err,rows){
      if(err){
        resp(err,null)
      }else{
        resp(null,rows);
      }
    });
}






module.exports=Users;

