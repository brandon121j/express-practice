var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var personRouter = require('./routes/person/personRouter');
// var recipeRouter = require('./routes/recipe/recipeRouter');
// var userRouter = require('./routes/user/userRouter');

mongoose.connect('mongodb://localhost:27017/express-practice')
  .then(() => {
    console.log("MONGODB CONNECTED")
  })
  .catch((e) => {
    console.log(e)
  })

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/person', personRouter);
// app.use('/api/recipe', recipeRouter);
// app.use('/api/user', userRouter);

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
  res.json({ error: "error", err });
});

module.exports = app;
