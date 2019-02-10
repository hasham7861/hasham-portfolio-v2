const nodemailer = require('nodemailer');

module.exports = class Email {

  constructor(email,subject,message){
    this.email = email;
    this.subject = subject;
    this.message = message;
  }

  isEmailInfoEmpty () {
    return this.email === "" && this.subject === "" && this.message === "";
  }

  sendEmail ()  {
    console.log(this.email);
    if (this.isEmailInfoEmpty() === false){
      // Create the transporter with the config for gmail smtp server
      const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: { /// Todo: create a seprate server with just for this purpose
            user: 'hashamsmtpserver@gmail.com',
            pass: 'Hasham1234'
        }
      });

      const message = "--- Message from your SMTP Server --- \n\n" + "ReplyTo: " + this.email + "\n\nMessage: " + this.message;

      const mailOptions = {
        to:"hasham.alam@hotmail.com",
        replyTo: this.email,
        subject: this.subject, // Subject line
        text: message
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
