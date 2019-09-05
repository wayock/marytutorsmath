const express = require("express");
const app = express();
var bodyParser = require('body-parser');
const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('static/index', urlencodedParser, function (req, res){
  console.log(req.body);
  res.render('/', {qs: req.query});
});


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
