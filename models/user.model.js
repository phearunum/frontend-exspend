
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
/* Create Users */
Users.CreateUser=function(userobject,resp){
 
 dbConnect.query(`INSERT INTO ${table} SET ?`,userobject,function(err,rows){
    if(err){
        resp(err,null)
      }else{
        resp(null,rows.insertedId);
      }
 })
}

Users.UpdateUser=function(id,users,resp){
  dbConnect.query(`Update ${table} SET fname=?,lname=?,phone=? 
                  WHERE id=?`,
                  [users.fname,users.lname,users.phone,id],
                  function(err,rows){
            if(err){
                resp(err,null)
            }else{
                resp(null,rows);
            }
   })
}
Users.deleteUser=function(id,resp){
  dbConnect.query(`delete from ${table}  WHERE id=?`,[id],function(err,rows){
        if(err){
          resp(err,null)
        }else{
          resp(null,rows);
        }
  })
}



module.exports=Users;

