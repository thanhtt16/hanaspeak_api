'use strict'

var LoginModel = require('../models/LoginModel');

var LoginController = function () {

}

LoginController.login = function (username, password) {
    return new Promise((resolve, reject) => {
        LoginModel.login(username, password)
            .then(token => { 
                return resolve(token);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

module.exports = LoginController;