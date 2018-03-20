'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    UserController = require('../../controllers/UserController');

// Middleware heck authen token
router.use(check_authen);
/**
 * @swagger
 *  definition:
 *   user:
 *    properties:
 *     username:
 *      type: string
 *     password:
 *      type: string
 *     email:
 *      type: string
 *     phone:
 *      type: number
 *     active:
 *      type: integer
 */

/**
 * @swagger
 * /users:
 *  post:
 *   tags:
 *    - users
 *   summary: Add new user
 *   description: ''
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: body
 *      description: User object
 *      required: true
 *      schema:
 *       $ref: '#/definitions/user'
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
 *    - users
 *   summary: Get 
 *   description: ''
 *   produces:
 *    - application/json
 *   parameters:
 *    - in: body
 *      name: body
 *      description: User object
 *      required: true
 *      schema:
 *       $ref: '#/definitions/user'
 *   responses:
 *    200:
 *     description: Successfully created
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