'use strict';

var express = require('express'),
    router = express.Router(),
    login_api = require('./login_api'),
    signup_api = require('../v1/signup_api'),
    user_api = require('./user_api'),
    role_api = require('./role_api');

// Import Route
router.use('/login', login_api);
router.use('/signup', signup_api);
router.use('/users', user_api);
router.use('/roles', role_api);



/**
 * @swagger
 *  definitions:
 *    Signup:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *        password:
 *          type: string
 *        email:
 *          type: string
 *    Login:
 *      type: object
 *      required:
 *        - username
 *        - password
 *      properties:
 *        username:
 *          type: string
 *        password:
 *          type: string
 *    User:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *        password:
 *          type: string
 *        email:
 *          type: string
 *        phone:
 *          type: number
 *        active:
 *          type: integer
 */

/**
 * @swagger
 *   securityDefinitions:
 *     Bearer:
 *       type: apiKey
 *       name: Authorization
 *       in: header 
 */
module.exports = router;
