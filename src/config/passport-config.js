const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

module.exports = {
  init(app){

// #2
    app.use(passport.initialize());
    app.use(passport.session());
}
