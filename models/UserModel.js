'use strict'

var jwt = require('jsonwebtoken');
var logger = require('../utils/logger');
var config = require('config');
var bcrypt = require('bcrypt');
var User = require('./Schemas/User');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(User);
var UserModel = function () {

}

UserModel.createNewUser = function (userData) {
    return new Promise((resolve, reject) => {
        let username = userData['username'],
            password = userData['password'];
        // Hash password
        bcrypt.hash(password, config.get('salt_factor'), (err, hash) => {
            if (err) {
                logger.error('UserModel.createNewUser hash password error: ', err);
                return reject({
                    code: 500,
                    message: 'Hash password error'
                });
            }
            userData['password'] = hash;
            // Insert new user
            User.findCreateFind({
                defaults: userData,
                where: {
                    username: username
                }
            }).spread((user, created) => {
                if (created)
                    return resolve(user);
                else
                    return reject({
                        code: 409,
                        message: 'User has existed'
                    });
            }).catch(error => {
                logger.error('UserModel.createNewUser hash password error: ', error);
                return reject({
                    code: 500,
                    message: 'Create new user error'
                });
            })
        });
    })
}

UserModel.getUsers = function (user_id, limit, page) {
    return commonModel.get(user_id, limit, page);
}

UserModel.updateUser = function (user_id, userData) {
    return new Promise((resolve, reject) => {
        let password = userData['password'];
        // Hash password
        try {
            if (password)
                userData['password'] = bcrypt.hashSync(password, config.get('salt_factor'));
        } catch (ex) {
            logger.error('UserModel.updateUser has exception: ', ex);
            return reject({
                code: 500,
                message: 'Hash password error'
            });
        }
        User.update(userData, {
            where: {
                id: user_id
            }
        }).then(result => {
            if (result[0] == 1)
                return resolve('Update user success');
            else
                return reject({
                    code: 404,
                    message: 'user_id is not existed'
                });
        }).catch(error => {
            logger.error('UserModel.updateUser has error: ', error);
            return reject({
                code: 500,
                message: 'Update user error'
            });
        })
    })
}

UserModel.deleteUser = function (user_id) {
    return commonModel.delete(user_id);
}


module.exports = UserModel;