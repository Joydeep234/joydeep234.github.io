const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();


dotenv.config({path:'./.env'})
require('./DB/Dbconnection')
const customer=require('./Models/CostumerSchema');


app.use(express.json());
app.use(require('./routes/auth'));


port=process.env.PORT;

app.listen(port,()=>{
    console.log(`server start at port:${port}`)
})