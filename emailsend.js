exports.updateemail=(req,res,next)=>{
    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.ethereal.email",
   port: 587,
    secure: false, // true for 465, false for other port
  auth: {
    port: 587,
    user: 'mohammedsalmansmj@gmail.com',
    pass: 'mrsalmanISTHEBOSS9984'
  }
});

var mailOptions = {
  from: 'snegaaravikumar@gmail.com',
  to: 'snegaaravikumar@gmail.com',
  subject: 'Related to orders',
  text: 'Your orders are cancelled'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}