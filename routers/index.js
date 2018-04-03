'use strict';
const path = require("path");
var express = require('express'),
    router = express.Router();
// add modification header
router.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Al' +
            'low-Credentials');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

router.use('/', require('./not_authorize'));

module.exports = router;