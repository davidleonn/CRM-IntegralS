// Required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const session = require('express-session');const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const config = require('./config');
require('dotenv').config();


//mongoDB connection
const mongoURL = process.env.mongoURL;
mongoose
       .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
       .then((res)=>console.log("Connection to DB"))
       .catch((error)=>console.log(error, "not connected"))

// App routes imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var crmRouter = require('./routes/crmData');
var customerSupportRouter = require('./routes/customerSupport');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/chart.js/dist'));

//App routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/dashboard', crmRouter);
app.use('/customer-support', customerSupportRouter);


//Linkedin oauth
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, callback) {
  callback(null, user);
});

passport.deserializeUser(function (obj, callback) {
  callback(null, obj);
});

passport.use(new LinkedInStrategy({
  clientID: config.linkedinAuth.clientID,
  clientSecret: config.linkedinAuth.clientSecret,
  callbackURL: config.linkedinAuth.callbackURL,
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function (token, tokenSecret, profile, done) {
  return done(null, profile);
}
));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;