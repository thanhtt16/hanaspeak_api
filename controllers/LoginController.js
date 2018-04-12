'use strict'

var LoginModel = require('../models/LoginModel');

var LoginController = function () {}

LoginController.login = function (username, password) {
    return LoginModel.login(username, password);
}

module.exports = LoginController;