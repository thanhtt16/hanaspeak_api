'use strict';

var express = require('express'),
    router = express.Router(),
    LoginController = require('../../controllers/LoginController');

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
                error: error
            })
        })

})

module.exports = router;