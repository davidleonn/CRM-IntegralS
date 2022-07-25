var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config();

//link for connecting to db through compass
//user lol  passowrd  pass123
//mongodb+srv://lol:pass123@crm.hlpev.mongodb.net/?retryWrites=true&w=majority


const mongoURL = process.env.mongoURL
console.log(mongoURL)
mongoose
       .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
       .then((res)=>console.log("Connection to DB"))
       .catch((error)=>console.log(error, "not connected"))


// // 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var startpageRouter = require('./routes/startpage');
var dashboardRouter = require('./routes/dashboard');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/startpage', startpageRouter);
app.use('/dashboard', dashboardRouter);
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

// app.listen(3000,  (error) => {
//   error ? console.log(["not listen"]) : console.log("server listen");
// })

module.exports = app;