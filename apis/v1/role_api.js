'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    RoleController = require('../../controllers/RoleController');

// Check authen token
router.use(check_authen);
// Create new role
router.post('/', (req, res) => {
    RoleController.createNewRole(req.body)
        .then(role => {
            return res.status(200).jsend.success(role);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Get list roles or get detail role
router.get('/', (req, res) => {
    let role_id = req.query['role_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    RoleController.getRoles(role_id, limit, page)
        .then(results => {
            return res.status(200).jsend.success(results);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Update role by id
router.put('/:id', (req, res) => {
    let role_id = req.params['id'],
        role_data = req.body;
    RoleController.updateRole(role_id, role_data)
        .then(result => {
            return res.status(200).jsend.success(result);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Delete role by id
router.delete('/:id', (req, res) => {
    let role_id = req.params['id'];
    RoleController.deleteRole(role_id)
        .then(result => {
            return res.status(200).jsend.success(result);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

module.exports = router;