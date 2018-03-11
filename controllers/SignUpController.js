'use strict';

var SignUpModel = require('../models/SignUpModel');

var SignUpController = function () {

}

SignUpController.signup = function (userData) {
    return new Promise((resolve, reject) => {
        SignUpModel.signup(userData)
            .then(token => { 
                return resolve(token);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

module.exports = SignUpController;