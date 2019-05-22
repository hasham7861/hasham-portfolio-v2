var express = require('express');
var cors = require('cors'); // Allow Access-Control-Allow-Origin
var logger = require('morgan'); // use a logger for the the request being made to app
var bodyParser = require('body-parser'); // Helps parse HTTP post request

// get all the routes used for this app
var indexRouter = require('./routes/index');
var email = require('./routes/email');
var projects = require('./routes/projects');
var github  = require('./routes/github');

var app = express();

// Setting up bodyparser for express
app.use(bodyParser.json()); // Help parse parameters from http request
app.use(bodyParser.urlencoded({ extended: true }));

// use the following settings for the middleware
app.use(logger('dev'));
app.use(cors()); // Adding cross orgin header to http request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// All the routes for the middleware
app.use('/', indexRouter);
app.use('/',email);
app.use('/',projects);
app.use('/',github);

// Route that doesn't exist
app.use(function(req, res) {
  if (!req.route)
       res.json({"message": "Enter in a valid endpoint"});
});

module.exports = app;
