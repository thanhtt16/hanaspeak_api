'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    UserController = require('../../controllers/UserController');

// Middleware heck authen token
router.use(check_authen);

/**
 * @swagger
 * /users:
 *  post:
 *   tags:
 *    - User
 *   summary: Add new user
 *   description: ''
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   security:
 *    - Bearer: []
 *   parameters:
 *    - in: body
 *      name: body
 *      description: User object
 *      required: true
 *      schema:
 *       $ref: '#/definitions/User'
 *   responses:
 *    200:
 *     description: Successfully created
 */
router.post('/', (req, res) => {
    UserController.createNewUser(req.body)
        .then(user => {
            return res.status(200).jsend.success(user);
        })
        .catch(error => {
            return res.jsend.error(error);
        })
})

/**
 * @swagger
 * /users:
 *  get:
 *   tags:
 *    - User
 *   security:
 *    - Bearer: []
 *   summary: Get all user or by query params
 *   description: ''
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: query
 *      name: user_id
 *      description: user id
 *      schema:
 *       type: integer
 *      allowReserved: true
 *    - in: query
 *      name: limit
 *      description: limit number of select record
 *      schema:
 *       type: integer
 *      allowReserved: true
 *    - in: query
 *      name: page
 *      description: page number
 *      schema:
 *       type: integer
 *      allowReserved: true
 *   responses:
 *    200:
 *     description: Get successfully
 */
router.get('/', (req, res) => {
    let user_id = req.query['user_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    UserController.getUsers(user_id, limit, page)
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