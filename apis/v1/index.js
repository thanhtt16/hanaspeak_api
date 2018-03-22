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
 *      example:
 *        username: thanhtt1
 *        password: thanhtt1
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
 *      example:
 *        username: thanhtt1
 *        password: thanhtt1
 *        email: thanhtt1@gmail.com
 *        phone: 0912345678
 *        active: 1
 *    Error:
 *      type: object
 *      required:
 *        - status
 *        - message
 *      properties:
 *        status:
 *          type: string
 *        message:
 *          type: string
 *        data:
 *          type: object
 *      example:
 *        example: error
 *        message: Message for error
 *    Success:
 *      type: object
 *      required:
 *        - status
 *        - data
 *      properties:
 *        status:
 *          type: string
 *        data:
 *          type: object
 *      example:
 *        status: success
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
