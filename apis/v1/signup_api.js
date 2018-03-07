'use strict';

var express = require('express'),
    router = express.Router(),
    SignUpController = require('../../controllers/SignUpController');

router.post('/', (req, res) => {
    
    

    LoginController.login(username, password)
        .then(token => {
            return res.jsend.success({
                message: "Enjoy your token",
                token: token
            })
        })
        .catch(error => {
            return res.jsend.fail({
                error: error.message
            })
        })

})

module.exports = router;