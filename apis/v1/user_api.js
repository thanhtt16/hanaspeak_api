'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    UserController = require('../../controllers/UserController');

// Check authen token
router.use(check_authen);
// Create new user
router.post('/', (req, res) => {
    UserController.createNewUser(req.body)
        .then(user => {
            return res.jsend.success(user);
        })
        .catch(error => {
            return res.jsend.error(error);
        })
})

// Get list users
router.get('/', (req, res) => {
    UserController.getUsers()
        .then(results => {
            return res.jsend.success(results);
        })
        .catch(error => {
            return res.jsend.error(error);
        })
})

// Update user
router.put('/:id', (req, res) => {
    let user_id = req.params['id'],
        userData = req.body;
    UserController.updateUser(user_id, userData)
        .then(result => {
            return res.jsend.success(result);
        })
        .catch(error => {
            return res.jsend.error(error);
        })
})

// Delete user
router.delete('/:id', (req, res) => {
    let user_id = req.params['id'];
    UserController.deleteUser(user_id)
        .then(result => {
            return res.jsend.success(result);
        })
        .catch(error => {
            return res.jsend.error(error);
        })
})

module.exports = router;