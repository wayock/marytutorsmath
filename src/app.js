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
