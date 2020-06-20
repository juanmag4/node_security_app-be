const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { models } = require('./src/models');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const feedsRoutes = require('./src/routes/feeds');
const settingsRoute = require('./src/routes/settings.route');
const recordsRouter = require('./src/routes/records.route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feeds', feedsRoutes);
app.use('/settings', settingsRoute);
app.use('/records', recordsRouter);

module.exports = app;
