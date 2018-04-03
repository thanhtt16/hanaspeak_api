'use strict';

var express = require('express'),
    path = require("path"),
    router = express.Router();

// Import Route
router.get('/upload-vocabulary', (req, res) => {
    res.header('Content-Type', 'text/html');
    return res.render('upload')
});

module.exports = router;
