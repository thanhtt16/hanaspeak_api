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
 *         required: true
 *         description: username and password
 *         schema:
 *           $ref: '#/definitions/Login'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/', (req, res) => {
    let username = req.body['username'];
    let password = req.body['password'];

    if (!username || !password) {
        return res.jsend.fail({
            code: 400,
            message: 'Bad request',
            payload: req.body
        })
    }
    LoginController.login(username, password)
        .then(token => {
            return res.jsend.success({
                message: "Enjoy your token",
                token: token
            })
        })
        .catch(error => {
            return res.jsend.fail({
                message: error
            })
        })

})

module.exports = router;