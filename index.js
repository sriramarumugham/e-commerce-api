const express=require('express');

const bodyParser=require('body-parser');

const PORT = process.env.PORT || 8000;

const app=express();


const db=require('./config/mongoose');

app.use(express.urlencoded());

app.use('/' , require('./routes/index'));

app.listen(PORT, function (err){
    if(err){
        console.log("couldnt create express app");
        return;
    }
    console.log("express app running on port", PORT);
})