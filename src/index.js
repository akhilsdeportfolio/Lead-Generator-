const express = require('express');
const userController = require('./controllers/userController');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use('/users',userController);

app.get("/",(req,res)=>{
     res.send("Hello world !");
})



module.exports=app;