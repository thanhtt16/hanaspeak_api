'use strict';

var SignUpModel = require('../models/SignUpModel');

var SignUpController = function () {

}

SignUpController.signup = function (username, password) {
    return new Promise((resolve, reject) => {
        SignUpModel.signup(username, password)
            .then(token => { 
                return resolve(token);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

module.exports = LoginController;