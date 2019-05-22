const express = require('express'); // Helps Create Middleware easily
const router = express.Router();
const EmailController = require('../controllers/EmailController.js');

router.post('/email/send', (req,res) => {
        
    const mail = new EmailController(req.body.email, 
                                    req.body.subject,
                                    req.body.message);
    mail.sendEmail().then(function (info){
        res.send({"message":info});
    }).catch(
        function(err){
            res.send({"message":err});
        }
    );

   
});

module.exports = router;