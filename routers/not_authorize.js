'use strict';

var express = require('express'),
    path = require("path"),
    router = express.Router();

// Import Route
router.get('/create-vocabulary', (req, res) => {
    res.header('Content-Type', 'text/html');
    return res.render('create_new_vocabulary')
});

module.exports = router;
