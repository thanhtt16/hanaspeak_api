// =======================
// get the packages we need ============
// =======================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('config');
var jwt = require('jsonwebtoken');
var jsend = require('jsend');

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Using jsend middle ware
app.use(jsend.middleware);

// Database
var db = require('./database/db_mysql');
db.connect();

// use morgan to log requests to the console
app.use(morgan('dev'));

// Import API router
var apiRoutes = require('./apis');
app.use(apiRoutes);

// Static
app.use(express.static('public'));

// basic route
app.get('/', function (req, res) {
    return res.jsend.success('Welcome to hanaspeak. Base API router is /api/v1');
});

var port = process.env.PORT || config.get('server.port');
app.listen(port);
console.log('Server is running at port:' + port);