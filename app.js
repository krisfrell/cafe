const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const validator = require('express-validator');
const MongoStore = require('connect-mongo')(session);
const helpers = require('handlebars-helpers');
const hbsHelpers = helpers();

let routes = require('./routes/index');
let userRoutes = require('./routes/user');

const app = express();

let dbUrl = 'mongodb://localhost:port/shopping';
mongoose.connect('mongodb://localhost:27017/shopping');

require('./config/passport');
// view engine setup
app.engine('.hbs', expressHbs({helpers: hbsHelpers, defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecretsession', 
  resave: false, 
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 1000 }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.locals.login = req.isAuthenticated();
  res.locals.session = req.session;
  next();
});

app.use('/user', userRoutes);
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// Get notified if a successful connection to db occurs or a connection error
const db = mongoose.connection;
db.on('error', function (err) {
	if (err.message && err.message.match(/failed to connect to server .* on first connect/)) {
		console.log(new Date(), String(err));
		setTimeout(function () {
			console.log("Retrying first connect...");
			db.openUri(dbUrl).catch(() => {});
		}, 20 * 1000);
	} else {
		console.error(new Date(), String(err));
	}
});

db.once('open', function () {
	console.log("Connection to db established.");
});

app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contacts'));
});

module.exports = app;
