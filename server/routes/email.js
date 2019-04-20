const express = require('express'); // Helps Create Middleware easily
const bodyParser = require('body-parser'); // Helps parse HTTP post request

// Create an express app
const app = express();
app.use(bodyParser.json()); // Parse parameters of post requests

app.post('/messaged', (req,res) => {
  // Once send message makes a post request, mail the message to Owner of Site
    const mail = new email(req.body.email, req.body.subject,req.body.message);
    mail.HTTPPOST();
});