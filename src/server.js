const connect = require('./config/db');
const app = require('./index');



app.listen(5000,async ()=>{
     await connect();

     console.log("App is listening on the port 5000");
})