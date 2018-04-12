'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    RoleController = require('../../controllers/RoleController'),
    CommonApi = require('./common_api');

// Check authen token
router.use(check_authen);
// Create new role
router.post('/', (req, res) => {
    CommonApi.create(req, res, RoleController.createNewRole);
})

// Get list roles or get detail role
router.get('/', (req, res) => {
    let role_id = req.query['role_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    CommonApi.get(req, res, role_id, limit, page, RoleController.getRoles);
})

// Update role by id
router.put('/:id', (req, res) => {
    let role_id = req.params['id'],
        role_data = req.body;
    CommonApi.update(req, res, role_id, role_data, RoleController.updateRole);
})

// Delete role by id
router.delete('/:id', (req, res) => {
    let role_id = req.params['id'];
    CommonApi.delete(req, res, role_id, RoleController.deleteRole);
})

module.exports = router;