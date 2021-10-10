const nodemailer = require('nodemailer');



let transporter = nodemailer.createTransport({
     pool:true,
     host: "smtp.mailtrap.io",
     port: 2525,
     auth: {
       user: "e9225d128dabd5",
       pass: "3fb81b1c3da073"
     },
     maxConnections:Infinity,
     maxMessages:Infinity
});


module.exports=transporter;