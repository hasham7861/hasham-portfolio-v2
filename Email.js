const nodemailer = require('nodemailer');

module.exports = class Email {

  constructor(name,email,message){
    this.name = name;
    this.email = email;
    this.message = message;
  }

  isEmailInfoEmpty () {
    return this.name === "" && this.email === "" && this.message === "";
  }

  sendEmail ()  {
    console.log(this.email);
    if (this.isEmailInfoEmpty() === false){
      // Create the transporter with the config for outlook
      const transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com", // hostname
          secureConnection: false, // TLS requires secureConnection to be false
          port: 587, // port for secure SMTP
          tls: {
             ciphers:'SSLv3'
          },
          auth: { /// Todo: create a seprate server with just for this purpose
              user: 'hasham.alam@hotmail.com',
              pass: 'Has786!!'
          }
      });

      const message = "--- Message from your Website --- \n\nRecipient: " + this.name + "\n" + "Email: " + this.email + "\n\nMessage: " + this.message;

      const mailOptions = {
        to:"hasham.alam@hotmail.com",
        replyTo: this.email,
        subject: 'Email sent from your Website', // Subject line
        text: message
      }

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
        if(error)
          console.log(error);
        else
            console.log('Email sent: ' + info.response);
      });
    }
  }
}
