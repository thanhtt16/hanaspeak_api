'use strict';

var express = require('express'),
    router = express.Router(),
    SignUpController = require('../../controllers/SignUpController');

router.post('/', (req, res) => {
    SignUpController.signup(req.body)
        .then(result => {
            return res.jsend.success(result);
        })
        .catch(error => {
            return res.jsend.error(error);
        })
})

module.exports = router;