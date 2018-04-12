'use strict'

var Role = require('./Schemas/Role');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(Role);
var RoleModel = function () {}

// Create Role
RoleModel.createRole = function (roleData) {
    return commonModel.create(roleData, ['name']);
}

// Get roles with paging
RoleModel.getRoles = function (roleId, limit, page) {
    return commonModel.get(roleId, limit, page);
}

// Update role
RoleModel.updateRole = function (roleId, roleData) {
    return commonModel.update(roleId, roleData);
}

// Delete role
RoleModel.deleteRole = function (roleId) {
    return commonModel.delete(roleId);
}
module.exports = RoleModel;