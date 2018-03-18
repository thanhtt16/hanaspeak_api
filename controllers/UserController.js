'use strict'

var UserModel = require('../models/UserModel');

var UserController = function () {

}

UserController.createNewUser = function (userData) {
    return new Promise((resolve, reject) => {
        UserModel.createNewUser(userData)
            .then(user => {
                return resolve(user);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

UserController.getUsers = function () {
    return new Promise((resolve, reject) => {
        UserModel.getUsers()
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

UserController.updateUser = function (user_id, userData) {
    return new Promise((resolve, reject) => {
        UserModel.updateUser(user_id, userData)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

UserController.deleteUser = function (user_id) {
    return new Promise((resolve, reject) => {
        UserModel.deleteUser(user_id)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}


module.exports = UserController;