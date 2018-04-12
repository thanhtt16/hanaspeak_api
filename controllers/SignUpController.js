'use strict';

var SignUpModel = require('../models/SignUpModel');

var SignUpController = function () {}

SignUpController.signup = function (userData) {
    return SignUpModel.signup(userData);
}

module.exports = SignUpController;