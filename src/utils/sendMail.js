const transporter = require('../config/emailConfig');




let sendMail = (from,to,subject,message,html)=>{


     var message = {
          from: from,
          to: to,
          subject: subject,
          text: message,
          html: html
        };
     transporter.sendMail(message,(err,info)=>{
          console.log("Error"+err);
          console.log("info"+info);
     })


}


module.exports=sendMail;