'use strict';

var express = require('express'),
    router = express.Router(),
    SignUpController = require('../../controllers/SignUpController');
/**
 * @swagger
 * /signup:
 *   post:
 *     tags:
 *       - Signup
 *     summary: Signup new account
 *     description: ''
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         description: Signup object
 *         schema:
 *           $ref: '#/definitions/Signup'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/', (req, res) => {
    SignUpController.signup(req.body)
        .then(result => {
            return res.jsend.success(result);
        })
        .catch(error => {
            return res.jsend.error(error);
        })
})

module.exports = router;