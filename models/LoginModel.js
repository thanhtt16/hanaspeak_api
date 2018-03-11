var jwt = require('jsonwebtoken');
var db = require('../database/db_mysql');
var pool = db.getPool();
var logger = require('../utils/logger');
var config = require('config');
var bcrypt = require('bcrypt');
var LoginModel = function () {

}

LoginModel.login = function (username, password) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                logger.error('Get DB connection error', err);
                return reject(err);
            }
            // select user from DB
            var sql_query = "SELECT * FROM users WHERE username = ?";
            var query_params = [username];
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
                        logger.warn("Username is not valid");
                        return reject("Username is not valid");
                    }
                    // Validate password
                    let pwHash = results[0]["password"];
                    bcrypt.compare(password, pwHash)
                        .then(res => {
                            if (res) {
                                // Generate token
                                var payload = {
                                    admin: true
                                };
                                var token = jwt.sign(payload, config.get('app.secret_key'), {
                                    expiresIn: config.get('token_expire') // expires in 300 seconds
                                });
                                return resolve(token);
                            }
                            logger.error("username and password are not matched");
                            return reject("username and password are not matched");
                        })
                        .catch(error => {
                            logger.error("Compare password error: ", error);
                            return reject("Compare password has error: " + error.message);
                        })
                }
            });
        })
    })
}

module.exports = LoginModel;