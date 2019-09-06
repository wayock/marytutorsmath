const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/form', function (req, res){
  var api_key = process.env.MAILGUN_API_KEY;
  var domain = 'sandboxfe530aa7650e4fba98e7ef18a3f061a2.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

  var data = {
    from: 'Mail Gun Mary Tutors Math<postmaster@sandboxfe530aa7650e4fba98e7ef18a3f061a2.mailgun.org>',
    to: 'mwayock@gmail.com',
    subject: 'Tutoring Request',
    text: `${req.body.inputParentFirstName4} ${req.body.inputParentLastName4}
    ${req.body.inputStudentFirstName4} ${req.body.inputStudentLastName4}
    ${req.body.inputEmail4} ${req.body.phone4}
    ${req.body.grade4} ${req.body.inputMathSubject4}
    ${req.body.inputDetails4}`
  };

  mailgun.messages().send(data, function (error, body) {
    console.log(body);
    if(!error){
      res.send("Form Successfully Submitted. I will be in contact with you soon!")
    } else {
      res.send("Form submission unsuccessful. Please try again later.")
    }
  });
});

// app.post('/form', urlencodedParser, function (req, res){
//   console.log(req.body);
//   res.render('/', {qs: req.query});
// });

// const msg = {
//   to: 'marywayock@gmail.com',
//   from: 'marytutorsmath@math.com',
//   subject: 'New Tutoring Request',
//   text: ' ',
//   html: ' ',
// };
// sgMail.send(msg);



appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;
