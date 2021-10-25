var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var helmet = require('helmet')

var app = express();

app.use(function(req, res, next) {
  res.setHeader(
    "Content-Security-Policy", 
    "frame-ancestors 'self' http://3fd3-2804-14d-1289-8f37-f471-d1e-1213-9497.ngrok.io/users/new"
  );
  return next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

// app.use(helmet.contentSecurityPolicy({
//   useDefaults: true,
//   directives: {
//     scriptSrc: ["'self'", 'http://3fd3-2804-14d-1289-8f37-f471-d1e-1213-9497.ngrok.io/users/new'],
//     defaultSrc: ["'self'", 'http://3fd3-2804-14d-1289-8f37-f471-d1e-1213-9497.ngrok.io/users/new'],
//     childSrc: ["'self'", 'http://3fd3-2804-14d-1289-8f37-f471-d1e-1213-9497.ngrok.io/users/new'],
//     frameAncestors: [
//       "'self'",
//       'http://3fd3-2804-14d-1289-8f37-f471-d1e-1213-9497.ngrok.io/users/new'
//     ],
//     styleSrc: ["'self' https: 'unsafe-inline'"]
//   },
// }));

module.exports = app;
 