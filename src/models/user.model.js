const mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
     first_name:{type:String,required:true},
     last_name:{type:String,required:true},
     email:{type:String,required:true}
})

let User = mongoose.model("user",userSchema);

module.exports=User;