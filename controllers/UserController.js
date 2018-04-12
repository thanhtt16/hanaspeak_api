'use strict'

var UserModel = require('../models/UserModel');

var UserController = function () {}

UserController.createNewUser = function (userData) {
    return UserModel.createNewUser(userData);
}

UserController.getUsers = function (user_id, limit, page) {
    try {
        limit = parseInt(limit);
        page = parseInt(page);
        if (!limit || limit < 0) 
            limit = 10;
        if (!page || page < 0) 
            page = 0;
        }
    catch (ex) {
        limit = 10;
        page = 0;
    }
    return UserModel.getUsers(user_id, limit, page);
}

UserController.updateUser = function (user_id, userData) {
    return UserModel.updateUser(user_id, userData);
}

UserController.deleteUser = function (user_id) {
    return UserModel.deleteUser(user_id);
}

module.exports = UserController;