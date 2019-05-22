const nodemailer = require('nodemailer');
const config = require(__dirname + '/../config/config.json')["emailServerConfig"];

class EmailController{

    constructor(email,subject,message){
        this.email = email;
        this.subject = subject;
        this.message = message;
      }

    isEmailInfoEmpty () {
        return this.email === "" || this.subject === "" || this.message === "";
      }

    async sendEmail () {

        return new Promise ((resolve,reject)=>{
            if (this.isEmailInfoEmpty() === false){
                // Create the transporter with the config for gmail smtp server
                const transporter = nodemailer.createTransport({
                service:config.service,
                auth: {
                    user:config.user,
                    pass:config.pass
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
                const validEmailAddr = new RegExp(
                    '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$'
                    );
                
                
                
                    
                const mailOptions = {
                    to: config.to,
                    replyTo: this.email,
                    subject: this.subject, // Subject line
                    html: htmlMessage
                }
    
                // Send mail with defined transport object
               
                if(!validEmailAddr.test(this.email) ){
                    reject("Email is not correct");
                }
                else {
                    transporter.sendMail(mailOptions);
                    resolve("Email sent successfully");
                }
                
    
            }else{
                reject("Email form is not filled up");
            }
        })
        
        
    }
}


module.exports= EmailController;