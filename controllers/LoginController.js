var db = require('../database/db_mysql');
var pool = db.getPool();
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