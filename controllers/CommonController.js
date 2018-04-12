'use strict'


var CommonController = function () {

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

UserController.getUsers = function (user_id, limit, page) {
    return new Promise((resolve, reject) => {
        try {
            limit = parseInt(limit);
            page = parseInt(page);
            if (!limit || limit < 0) limit = 10;
            if (!page || page < 0) page = 0;
        } catch (ex) {
            limit = 10;
            page = 0;
        }
        UserModel.getUsers(user_id, limit, page)
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