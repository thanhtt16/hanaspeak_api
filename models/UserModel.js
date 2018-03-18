'use strict'

var jwt = require('jsonwebtoken');
var logger = require('../utils/logger');
var config = require('config');
var bcrypt = require('bcrypt');
var User = require('./Schemas/User');
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
                return reject('Hash password error');
            }
            userData['password'] = hash;
            // Insert new user
            User.findCreateFind({
                defaults: userData,
                where: { username: username }
            }).spread((user, created) => {
                if (created)
                    return resolve(user);
                else
                    return reject('User has existed');
            }).catch(error => {
                logger.error('UserModel.createNewUser hash password error: ', error);
                return reject('Create new user error');
            })
        });
    })
}

UserModel.getUsers = function () {
    return new Promise((resolve, reject) => {
        User.findAndCountAll({})
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                logger.error('UserModel.getUsers has error: ', error);
                return reject(error);
            })
    })
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
            return reject(ex);
        }
        User.update(userData, {
            where: { id: user_id }
        }).then(result => {
            if (result[0] == 1)
                return resolve('Update success');
            else
                return reject('user_id is not existed');
        }).catch(error => {
            logger.error('UserModel.updateUser has error: ', error);
            return reject(error);
        })
    })
}

UserModel.deleteUser = function (user_id) {
    return new Promise((resolve, reject) => {
        User.destroy({
            where: { id: user_id }
        }).then(result => {
            if (result == 1)
                return resolve('Delete success');
            else
                return reject('Not found user_id')
        }).catch(error => {
            logger.error('UserModel.deleteUser has error: ', error);
            return reject('Delete error');
        })
    })
}


module.exports = UserModel;