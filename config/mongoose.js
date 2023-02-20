const dotenv=require('dotenv').config();

const mongoose = require("mongoose");


mongoose.set('strictQuery', true);


mongoose.connect(process.env.openUri).then(()=>{
  console.log("atlast db connectd")
}).catch((err)=>{
  console.log("Failed to connect" , err)
})

const db = mongoose.connection;

db.on("error", function () {
  console.log("Countdnt connect mongoose");
});
db.once("open", function () {
  console.log("Mongoose connected to the db");
});
