const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/e_commerce_api_dev");

const db = mongoose.connection;

db.on("error", function () {
  console.log("Countdnt connect mongoose");
});
db.once("open", function () {
  console.log("Mongoose connected to the db");
});
