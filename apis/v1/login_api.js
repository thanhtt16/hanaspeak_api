'use strict';

var express = require('express'),
    router = express.Router(),
    LoginController = require('../../controllers/LoginController');
    
router.post('/', (req, res) => {
    let username = req.body['username'];
    let password = req.body['password'];

    if (!username || !password) {
        return res.status(400).jsend.error({
            code: 400,
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
                code: error['code'],
                message: error['message']
            })
        })

})

module.exports = router;