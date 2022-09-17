
const dbConnect= require('../config/db.config');
const Users =function (user){
 this.id =user.id;
 this.fname=user.fname;
 this.lname=user.lname;
 this.username=user.username;

};
const table ="sys_users";
Users.findAll=  function (res){
    dbConnect.query(` select * from ${table}`, (err,rows)=>{
        if(err) throw err;
        res(null,res[0]);
    });
};

module.exports=Users;

