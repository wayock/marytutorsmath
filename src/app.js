const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const flash = require('express-flash-notification');
const cookieParser = require('cookie-parser');
//const session = require('express-session');
// var session = require('express-session')
// const expressValidator = require("express-validator");

// app.use(session({
//    secret: process.env.cookieSecret,
//    resave: false,
//    saveUninitialized: false,
//    cookie: { maxAge: 60000 }
//  }));
// app.use(flash());


app.post('/form', urlencodedParser, function (req, res){
  console.log(req.body);

  const msg = {
    to: 'marywayock@gmail.com',
    from: 'marytutorsmath@math.com',
    subject: `New Tutoring Request from ${req.body.inputParentFirstName4} ${req.body.inputParentLastName4}`,
    text: 'Please help me learn math!',
     html: `Parent name: ${req.body.inputParentFirstName4} ${req.body.inputParentLastName4} <br />
  Student Name: ${req.body.inputStudentFirstName4} ${req.body.inputStudentLastName4} <br />
  Email: ${req.body.inputEmail4} <br />
  Phone: ${req.body.phone4} <br />
  Grade: ${req.body.grade4} <br />
  Math Subject: ${req.body.inputMathSubject4} <br />
  Details: ${req.body.inputDetails4}`
  };
  sgMail.send(msg);
  //req.flash('success', 'You have successfully submitted your form.  Mary will be in contact with you in the near future.')
  res.redirect("/");

});





appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;


// var api_key = process.env.MAILGUN_API_KEY;
// //var domain = 'sandboxfe530aa7650e4fba98e7ef18a3f061a2.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
//
// var domain = 'sandboxcfa063f4789041efa5b313db627c9e69.mailgun.org';
// //Your sending email address
// var from_who = 'wayock.com';
// var domain = 'https://wayock-marytutorsmath.herokuapp.com/';


// app.post('/', function (req, res){

  //  var data =   {
  //   from: 'Mail Gun Mary Tutors Math<postmaster@sandboxcfa063f4789041efa5b313db627c9e69.mailgun.org>',
  //   to: 'marywayock@gmail.com',
  //   subject: 'Tutoring Request',
  //   text: 'Hello World'
  //
  //
    //    `${req.body.inputParentFirstName4} ${req.body.inputParentLastName4}
    // ${req.body.inputStudentFirstName4} ${req.body.inputStudentLastName4}
    // ${req.body.inputEmail4} ${req.body.phone4}
    // ${req.body.grade4} ${req.body.inputMathSubject4}
    // ${req.body.inputDetails4}`
  // //
  //
  // }
  // mailgun.messages().send(data, function (error, body) {
  //     if(!error){
  //       res.send(data)
  //       console.log(data);
  //
  //     } else {
  //       console.log(error);
  //       res.send("Form submission unsuccessful. Please try again later.")
  //     }
  //   });
  // });
