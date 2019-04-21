const express = require('express'); // Helps Create Middleware easily
const router = express.Router();
import emailController from '../controllers/emailController.js';

const bodyParser = require('body-parser'); // Helps parse HTTP post request

router.use(bodyParser.json()); // Parse parameters of post requests

router.post('/email', (req,res) => {
    const mail = new emailController(req.body.email, req.body.subject,req.body.message);
    // const mail = new emailController("hadi.aamir8@gmail.com", "test subject","test message");
    mail.HTTPPOST();
    res.send({"message":"email successfully sent"});
});

module.exports = router;