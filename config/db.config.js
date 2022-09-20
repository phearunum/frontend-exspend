const mysql =require('mysql');
const env=require("dotenv").config()
const db_connect = mysql.createConnection({
    host:'18.143.158.236',
    user:'admin',
    password:'db@admin',
    database:'exspend_db',
    port:3306,
    connectionLimit : 10,
    
});

db_connect.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected');
 });

 module.exports=db_connect;



