'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    UserController = require('../../controllers/UserController'),
    CommonApi = require('./common_api');

// Middleware heck authen token
router.use(check_authen);

// Create new User
router.post('/', (req, res) => {
    CommonApi.create(req, res, UserController.createNewUser);
})

// Get User
router.get('/', (req, res) => {
    let user_id = req.query['user_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    CommonApi.get(req, res, user_id, limit, page, UserController.getUsers);
})

// Update User
router.put('/:id', (req, res) => {
    let user_id = req.params['id'],
        userData = req.body;
    CommonApi.update(req, res, user_id, userData, UserController.updateUser);
})

// Delete user
router.delete('/:id', (req, res) => {
    let user_id = req.params['id'];
    CommonApi.delete(req, res, user_id, UserController.deleteUser);
})

module.exports = router;
