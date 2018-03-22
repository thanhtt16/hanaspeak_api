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
 *         schema:
 *           $ref: '#/definitions/User'
 *       409:
 *         description: Conflict, user has existed
 *         schema: 
 *           $ref: '#/definitions/Error'
 *       500:
 *         description: Internal server error
 *         schema:
 *           $ref: '#/definitions/Error'
 */
router.post('/', (req, res) => {
    SignUpController.signup(req.body)
        .then(result => {
            return res.jsend.success(result);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

module.exports = router;