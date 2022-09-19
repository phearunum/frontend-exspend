const mysql =require('mysql');
const env=require("dotenv").config()
const db_connect = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:'db@admin',
    database:'exspend_db',
});

db_connect.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected');
 });

 module.exports=db_connect;



