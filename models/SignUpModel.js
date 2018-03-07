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
            // Hash password
            let password = userData["password"];
            bcrypt.hash(password, config.get('salt_factor'), (err, hash) => {
                if(err){
                    logger.error(err);
                    return reject(err)
                }
                password = hash;
            });
            // Check username existed
            var sql_query = "SELECT COUNT(*) FROM users WHERE username = ? AND password = ?";
            var query_params = [username, password];
            connection.query({
                sql: sql_query,
                timeout: config.get("mysql.timeout"),
                values: query_params
            }, function (error, results, fields) {
                if (error) {
                    logger.error(error);
                    return reject(error);
                } else {
                    if (results.length == 0) {
                        logger.warn("Username and password is incorrect");
                        return reject("Username and password is incorrect");
                    }
                    // Generate token
                    var payload = {
                        admin: true
                    };
                    var token = jwt.sign(payload, config.get('app.secret_key'), {
                        expiresIn: 300 // expires in 300 seconds
                    });
                    connection.release();
                    return resolve(token);
                }
            });
        })
    })
}

module.exports = SignUpModel;