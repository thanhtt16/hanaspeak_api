var Sequelize = require('sequelize');
var config = require('config');
var BaseTypes = require('sequelize/lib/data-types');
var util = require('util');

const sequelize = new Sequelize(config.get('mysql.database'), config.get('mysql.user'), config.get('mysql.password'), {
    host: config.get('mysql.host'),
    port: config.get('mysql.port'),
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});

// Custom TIMESTAMP
var TIMESTAMP = function () {
    if (!(this instanceof TIMESTAMP)) {
        return new TIMESTAMP();
    }

    BaseTypes.ABSTRACT.apply(this, arguments);
};

util.inherits(TIMESTAMP, BaseTypes.ABSTRACT);

TIMESTAMP.prototype.key = TIMESTAMP.key = 'TIMESTAMP';

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = { sequelize, Sequelize, TIMESTAMP };