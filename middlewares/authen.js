'use strict'

var jwt = require('jsonwebtoken'),
    config = require('config');

function check_authen(req, res, next) {
    // route middleware to verify a token
    // check header or url parameters or post parameters for token
    var token = req.body['access_token'] || req.query['access_token'] || req.token;

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, config.get('app.secret_key'), function (err, decoded) {
            if (err) {
                return res.jsend.error('Failed to authenticate token.');
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.jsend.error('No token provided.');
    }
}

module.exports = check_authen;