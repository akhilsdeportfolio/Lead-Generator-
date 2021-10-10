const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const User = require('../models/user.model');
const sendMail = require('../utils/sendMail');

router.post("/createUser",body("first_name").isLength({min:3}),body("last_name").isLength({min:3}),body("email").isEmail(),async (req,res)=>{


     let errors = validationResult(req);
     errors = errors.array().map((error)=>{
          return {error:error.msg,params:error.param};
     })
     if (!errors.length==0) {
       return res.status(400).json({ errors:errors});
     }else
     {

     }
 
     let data =await User.create(req.body);

     let admins =['akhilkamsala@gmail.com','akhil@jollydoc.in','admin@admin.com','akhil_fw11_197@masai.school','akhil@gmail.com'];


     await admins.forEach(element => {
          
          sendMail('admin@signup.com',element,"Success","this is sample message","<h1>This is a heading</h1>");

     });

     res.send(data);

});


module.exports = router;