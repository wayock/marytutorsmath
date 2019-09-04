const express = require("express");
const app = express();
const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


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
