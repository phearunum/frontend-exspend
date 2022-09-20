const express = require('express');
const app = express();
const bodyParser =require('body-parser');
require("dotenv").config({debug:process.DEBUG})
const port =8000;
app.use(express.urlencoded());
app.use(express.json());

const userRoute =require('./routes/users.route');
app.use('/api',userRoute);
app.listen(port,()=>{
    console.log(`Server Running Port ${port}`);
})




