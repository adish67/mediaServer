
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app =  express();
const configDb =  require('./config/constants.json');


//database
console.log("db connecting...");
mongoose.connect(configDb.local ,{useNewUrlParser: true},(err)=> {
    if (err) {
        console.log("connection error" + err);

    } else {
        console.log("db connected");
    }
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));



app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`server is running on port 3000`);
    }
})