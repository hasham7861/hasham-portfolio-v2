var express = require('express');
var cors = require('cors'); // Allow Access-Control-Allow-Origin
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan'); // use a logger for the the request being made to app
var bodyParser = require('body-parser'); // Helps parse HTTP post request

var indexRouter = require('./routes/index');
var email = require('./routes/email');
var projects = require('./routes/api/projects');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors()); // Adding cross orgin header to http request
app.use(bodyParser.json()); // Help parse parameters from http request
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



// All the routes for the middleware
app.use('/', indexRouter);
app.use('/routes',email);
// REST API for projects
app.use('/api',projects);



// Send a message if the endpoint does not exist
app.use(function(req, res) {
  if (!req.route)
       res.json({"message": "Enter in a valid endpoint"});
});

module.exports = app;
