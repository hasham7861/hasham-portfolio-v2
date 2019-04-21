const express = require('express'); // Helps Create Middleware easily
const email = require('./routes/email.js');
const app = express();
// const bodyParser = require('body-parser'); // Helps parse HTTP post request
// const mysql = require('mysql');

//Create a connection to mysql db
// var db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "nodemysql"
// });
// db.connect(()=>{
//   if(err) {
//     throw err;
//   }else{
//     console.log('MySql Connected...');
//   }
// });
// Create an express app


app.use('/routes',email);

const port = 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
