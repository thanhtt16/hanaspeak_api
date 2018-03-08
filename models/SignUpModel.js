'use strict';

var jwt = require('jsonwebtoken');
var db = require('../database/db_mysql');
var pool = db.getPool();
var logger = require('../utils/logger');
var config = require('config');
var bcrypt = require('bcrypt');

var SignUpModel = function () {

}

SignUpModel.signup = function (userData) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                logger.error('Get DB connection error', err);
                return reject(err);
            }
            let username = userData['username'],
                password = userData['password'];
            // Check user existed
            let check_query = "SELECT COUNT(*) FROM users WHERE username = ?";
            connection.query({
                sql: check_query,
                timeout: config.get('mysql.timeout'),
                values: [username]
            })
            // Hash password
            bcrypt.hash(password, config.get('salt_factor'), (err, hash) => {
                if (err) {
                    logger.error('SignUpModel.signup hash password error: ', err);
                    return reject('Hash password error');
                }
                password = hash;
                // Insert new user
                let sql_query = "INSERT INTO users (username, password) VALUES ?";
                var query_params = [[username, password]];
                connection.query({
                    sql: sql_query,
                    timeout: config.get("mysql.timeout"),
                    values: [query_params]
                }, function (error, results, fields) {
                    if (error) {
                        logger.error(error);
                        return reject(error);
                    } else {
                        return resolve('Insert user success');
                    }
                });
            });
        })
    })
}

module.exports = SignUpModel;