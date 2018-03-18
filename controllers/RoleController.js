'use strict'

var RoleModel = require('../models/RoleModel');

var RoleController = function () {

}

RoleController.createNewRole = function (role_data) {
    return new Promise((resolve, reject) => {
        RoleModel.createRole(role_data)
            .then(role => {
                return resolve(role);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

RoleController.getRoles = function (role_id, limit, page) {
    return new Promise((resolve, reject) => {
        try {
            limit = parseInt(limit);
            page = parseInt(page);
            if (!limit || limit < 0) limit = 10;
            if (!page || page < 0) page = 0;
        } catch (ex) {
            limit = 10;
            page = 0;
        }
        RoleModel.getRoles(role_id, limit, page)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

RoleController.updateRole = function (role_id, role_data) {
    return new Promise((resolve, reject) => {
        RoleModel.updateRole(role_id, role_data)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

RoleController.deleteRole = function (role_id) {
    return new Promise((resolve, reject) => {
        RoleModel.deleteRole(role_id)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}


module.exports = RoleController;