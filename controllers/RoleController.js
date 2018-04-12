'use strict'

var RoleModel = require('../models/RoleModel');

var RoleController = function () {}

RoleController.createNewRole = function (role_data) {
    return RoleModel.createRole(role_data);
}

RoleController.getRoles = function (role_id, limit, page) {
    try {
        limit = parseInt(limit);
        page = parseInt(page);
        if (!limit || limit < 0) 
            limit = 10;
        if (!page || page < 0) 
            page = 0;
        }
    catch (ex) {
        limit = 10;
        page = 0;
    }
    return RoleModel.getRoles(role_id, limit, page);
}

RoleController.updateRole = function (role_id, role_data) {
    return RoleModel.updateRole(role_id, role_data);
}

RoleController.deleteRole = function (role_id) {
    return RoleModel.deleteRole(role_id);
}

module.exports = RoleController;