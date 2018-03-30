'use strict'

var logger = require('../utils/logger');
var config = require('config');
var Role = require('./Schemas/Role');
var RoleModel = function () {

}

// Create Role
RoleModel.createRole = function (roleData) {
    return new Promise((resolve, reject) => {
        let role_name = roleData['name'];
        Role.findOrCreate({
            defaults: roleData,
            where: { name: role_name }
        }).spread((role, created) => {
            if (created)
                return resolve(role);
            else
                return reject({ code: 409, message: 'Role has existed' });
        }).catch(error => {
            logger.error('RoleModel.createRole has error: ', error);
            return reject({ code: 500, message: 'Create new role has error' });
        })
    })
}

// Get roles with paging
RoleModel.getRoles = function (role_id, limit, page) {
    return new Promise((resolve, reject) => {
        let offset = page * limit;
        let where_obj = {};
        if (role_id)
            where_obj = { id: role_id };
        Role.findAndCountAll({
            where: where_obj,
            limit: limit,
            offset: offset
        }).then(results => {
            if (results['count'] == 0)
                return reject({ code: 404, message: "Not found any role" })
            return resolve(results);
        }).catch(error => {
            logger.error('RoleModel.getRoles has error: ', error);
            return reject({ code: 500, message: 'Get roles error' });
        })
    })
}

// Update role
RoleModel.updateRole = function (role_id, role_data) {
    return new Promise((resolve, reject) => {
        Role.update(role_data, {
            where: { id: role_id }
        }).then(result => {
            if (result[0] == 1)
                return resolve('Update role success');
            else
                return reject({ code: 404, message: 'role_id is not existed' });
        }).catch(error => {
            logger.error('RoleModel.updateRole has error: ', error);
            return reject({ code: 500, message: 'Update role error' });
        })
    })
}

// Delete role
RoleModel.deleteRole = function (role_id) {
    return new Promise((resolve, reject) => {
        Role.destroy({
            where: { id: role_id }
        }).then(result => {
            if (result == 1)
                return resolve('Delete role success');
            else
                return reject({ code: 404, message: 'Not found role_id' })
        }).catch(error => {
            logger.error('RoleModel.deleteRole has error: ', error);
            return reject({ code: 500, message: 'Delete role error' });
        })
    })
}
module.exports = RoleModel;