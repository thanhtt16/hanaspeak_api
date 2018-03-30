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
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api_docs/api_doc.yaml');
var bearerToken = require('express-bearer-token');

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Load api docs using swagger-ui
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Using jsend middle ware
app.use(jsend.middleware);
// Using express-bearer-token get authentication token
app.use(bearerToken());

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
console.log('Document of apis at: localhost:5000/docs');