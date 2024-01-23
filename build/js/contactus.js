'use strict';

var nodemailer = require('../lib/nodemailer');

app.post("/send_email", function (req, response){
  var sender_name = req.body.sender_name;
  var from = req.body.from;
  var subject = req.body.subject;
  var message = req.body.message;

  var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'underscorevint@gmail.com',
    pass: 'apppassword needs to be created on google account'
  }
});

var mailOptions = {
  sender: sender_name,
  from: from,
  subject: subject,
  text: message,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

})
