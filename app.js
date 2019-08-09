const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const subdomain = require('express-subdomain');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const storeRouter = require('./routes/store');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(subdomain('greatdeals', storeRouter));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404, 'Requested URL not found on this server.'));
});

app.use(require('./routes/errorHandler'));

module.exports = app;
