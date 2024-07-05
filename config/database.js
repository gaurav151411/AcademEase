const mongoose =require("mongoose");
require("dotenv").config()

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("Db connected succesfully"))
    .catch((err)=>{
        console.log("Db connnection unsuccesful");
        console.error(err);
        process.env.exit(1);
    })
}