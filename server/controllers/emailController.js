require('dotenv').config();
const nodemailer = require('nodemailer');

class emailController{

    constructor(email,subject,message){
        this.email = email;
        this.subject = subject;
        this.message = message;
      }

    HTTPPOST(){
        this.sendEmail();
    }

    isEmailInfoEmpty () {
        return this.email === "" && this.subject === "" && this.message === "";
      }

    sendEmail () {
        console.log(this.email);
        if (this.isEmailInfoEmpty() === false){
            // Create the transporter with the config for gmail smtp server
            const transporter = nodemailer.createTransport({
            service:process.env.SMTPService,
            auth: {
                user:process.env.SMTPUser,
                pass:process.env.SMTPPass
            }
            });

          
            const htmlMessage = "<div style='display:inline-block;" +
                                "color: white; background-color:brown; " +
                                "padding:40px; border-radius:10px;'> " +
                                    "<h1>Message From Personal Website</h1>"  +
                                    "<p>Reply To: " + this.email + "</p>" +
                                    "<p>Subject: " + this.subject + "</p>" +
                                    "<p>Message: " + this.message +"</p>" +
                                "</div>" 
                                ;

            const mailOptions = {
                to:"hasham.alam@hotmail.com",
                replyTo: this.email,
                subject: this.subject, // Subject line
                html: htmlMessage
            }

            // Send mail with defined transport object
            transporter.sendMail(mailOptions, function(error, info){
                if(error)
                    console.log(error);
                else
                    console.log('Email sent: ' + info.response);
            });
        }
    }
}


export default emailController;