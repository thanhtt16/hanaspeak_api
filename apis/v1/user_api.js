'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    UserController = require('../../controllers/UserController');

// Middleware heck authen token
router.use(check_authen);

// Create new User
router.post('/', (req, res) => {
    UserController.createNewUser(req.body)
        .then(user => {
            return res.status(200).jsend.success(user);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Get User
router.get('/', (req, res) => {
    let user_id = req.query['user_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    UserController.getUsers(user_id, limit, page)
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

// Update User
router.put('/:id', (req, res) => {
    let user_id = req.params['id'],
        userData = req.body;
    UserController.updateUser(user_id, userData)
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

// Delete user
router.delete('/:id', (req, res) => {
    let user_id = req.params['id'];
    UserController.deleteUser(user_id)
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