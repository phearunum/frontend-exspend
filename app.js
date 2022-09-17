const express = require('express');
const app = express();
const port=8000;
const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,resp)=>{
    resp.send('Home Page')
})

const userRoute =require('./routes/users.route');
app.use('/api/users',userRoute);


app.listen(port,()=>{
    console.log(`Server Running Port ${port}`);
})




