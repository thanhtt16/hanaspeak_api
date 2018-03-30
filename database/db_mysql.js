'use strict';

var mysql = require('mysql');
var config = require('config');

var pool = null;
function connect(){
    pool = mysql.createPool({
            host: config.get('mysql.host'),
            port: config.get('mysql.port'),
            user: config.get('mysql.user'),
            password: config.get('mysql.password'),
            database: config.get('mysql.database'),
            acquireTimeout:1000000
    });
}

function getPool(){
    if(!pool){
        connect();
    }

    return pool;
}

module.exports = {
    connect: connect,
    getPool: getPool
};