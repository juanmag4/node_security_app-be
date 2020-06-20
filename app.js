const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const auth = require('./src/middleware/auth.middleware');

const indexRouter = require('./src/routes/index');
const feedsRoutes = require('./src/routes/feeds');
const settingsRoute = require('./src/routes/settings.route');
const recordsRouter = require('./src/routes/records.route');
const usersRouter = require('./src/routes/users.route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(auth);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/feeds', feedsRoutes);
app.use('/settings', settingsRoute);
app.use('/records', recordsRouter);

module.exports = app;
