const express = require("express"); // Helps Create Middleware easily
const bodyParser = require("body-parser"); // Helps parse HTTP post request
const Email = require("./Email");
// Create an express app
const app = express();

app.use(bodyParser.json()); // Parse parameters of post requests

app.post('/messaged', (req,res) => {
  // Once send message makes a post request, mail the message to Owner of Site
    // email not working fix
    const mail = new Email(req.body.email, req.body.subject,req.body.message);

    mail.sendEmail();
    res.json([{"Message":'message sent'}]);

});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
