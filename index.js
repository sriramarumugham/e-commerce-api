const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const PORT=8000;

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