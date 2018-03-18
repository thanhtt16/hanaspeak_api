'use strict';

var jwt = require('jsonwebtoken');
var db = require('../database/db_mysql');
var pool = db.getPool();
var logger = require('../utils/logger');
var config = require('config');
var bcrypt = require('bcrypt');
var User = require('./Schemas/User');

var SignUpModel = function () {

}

SignUpModel.signup = function (userData) {
    return new Promise((resolve, reject) => {
        let username = userData['username'],
            password = userData['password'];
        // Hash password
        bcrypt.hash(password, config.get('salt_factor'), (err, hash) => {
            if (err) {
                logger.error('SignUpModel.signup hash password error: ', err);
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
                logger.error('SignUpModel.signup hash password error: ', error);
                return reject('Create new user error');
            })
        });
    })
}

module.exports = SignUpModel;