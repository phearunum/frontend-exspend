const mysql =require('mysql');
const db_connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'exspend_db',
    port:3306
});

db_connect.connect((err)=>{
    if(err) throw err;
    console.log('Database Connected');
 });

 module.exports=db_connect;



