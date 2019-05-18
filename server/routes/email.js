const express = require('express'); // Helps Create Middleware easily
const router = express.Router();
const emailController = require('../controllers/EmailController.js');

router.post('/email/send', (req,res) => {
    if(req.body.email !== "" && req.body.subject !== "" && req.body.message !== ""){
        const mail = new emailController(req.body.email, req.body.subject,req.body.message);
        mail.sendEmail();
        res.send({"status":"email successfully sent"});
    } else{
        res.send({"status":"email not sent"});
    }
  
});

module.exports = router;