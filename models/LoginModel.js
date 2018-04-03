var jwt = require('jsonwebtoken');
var logger = require('../utils/logger');
var config = require('config');
var bcrypt = require('bcrypt');
var User = require('./Schemas/User');
var LoginModel = function () {

}

LoginModel.login = function (username, password) {
    return new Promise((resolve, reject) => {
        User.findOne({ where: { username: username } })
            .then(user => {
                if (!user) {
                    return reject({ code: 404, message: 'User not found' });
                }
                // Check password
                // Validate password
                let pwHash = user['password'];
                bcrypt.compare(password, pwHash)
                    .then(res => {
                        if (res) {
                            // Generate token
                            var payload = {
                                admin: true
                            };
                            var token = jwt.sign(payload, config.get('app.secret_key'), {
                                expiresIn: config.get('token_expire')
                            });
                            return resolve(token);
                        }
                        return reject({ code: 404, message: 'username and password are not matched' });
                    })
                    .catch(error => {
                        logger.error("Compare password error: ", error);
                        return reject({ code: 500, message: 'Compare password error' });
                    })

            })
            .catch(error => {
                logger.error(error);
                return reject(error);
            })
    })
}

module.exports = LoginModel;
