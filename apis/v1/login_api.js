'use strict';

var express = require('express'),
    router = express.Router(),
    LoginController = require('../../controllers/LoginController');

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Login
 *     summary: Allow users to log in, and to receive a Token
 *     description: ''
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: body
 *         required: true
 *         description: username and password
 *         schema:
 *           $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: Login success
 *         schema: '#/definitions/Login'
 *       400:
 *         description: Bad request, username and password are required
 *         schema:
 *           $ref: '#/definitions/Error'
 *       404:
 *         description: Not found username or username and pasword are not matched
 *         schema:
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal server error
 *         schema: 
 *           $ref: '#/definitions/Error'
 */
router.post('/', (req, res) => {
    let username = req.body['username'];
    let password = req.body['password'];

    if (!username || !password) {
        return res.status(400).jsend.error({
            message: 'Bad request',
            data: req.body
        })
    }
    LoginController.login(username, password)
        .then(token => {
            return res.status(200).jsend.success({
                message: "Enjoy your token",
                token: token
            })
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                message: error['message']
            })
        })

})

module.exports = router;