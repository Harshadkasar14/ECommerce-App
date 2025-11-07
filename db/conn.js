const mongoose = require("mongoose");


const DB = "mongodb://127.0.0.1:27017/ecommerce"; 

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("connection is successfully done")).catch((error)=>console.log("error hai" + error.message))