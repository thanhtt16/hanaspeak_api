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
var swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require('swagger-jsdoc');
var swaggerDocument = require('./docs/swagger_pet.json');
var bearerToken = require('express-bearer-token');
/**
 * Swagger definition
 */
var swaggerDefinition = {
    info: {
        title: 'Hanaspeak API',
        version: '1.0',
        description: 'Defind documents with Swagger',
    },
    host: 'localhost:5000',
    basePath: '/api/v1/',
};
// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./apis/v1/*.js'],
};
// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Using jsend middle ware
app.use(jsend.middleware);
// Using express-bearer-token get authentication token
app.use(bearerToken());
// Database
// var db = require('./database/db_mysql');
// db.connect();

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