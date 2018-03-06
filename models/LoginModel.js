var jwt = require('jsonwebtoken');
var db = require('../database/db_mysql');
var pool = db.getPool();
var logger = require('../utils/logger');
var LoginModel = function(){

}

LoginModel.login = function(username, password){
    return new Promise((resolve, reject)=>{
        pool.getConnection((err, connection)=>{
            if(err){
                logger.error('Get DB connection error', err);
                return reject(err);
            }
            // Do login, create and resolve token
            return resolve("success");
        })
    })
}

module.exports = LoginModel;