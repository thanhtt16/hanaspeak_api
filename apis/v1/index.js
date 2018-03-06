'use strict';

var express = require('express'),
    router = express.Router();

// Route for login
router.post("/login", function(req, res){
    let username = req.body.username;
    let password = req.body.password;

    if(!username || !password){
        return res.json({
            success: false,
            message: "Missing parameters"
        });
    }

    login_service.login(username, password).then(function(body){
        res.json(body);
    }).catch(function(err){
        console.log(err);
        res.json({
            success: false
        });
    });
});

// router.all('/users*', [require('../../middlewares/auth')]);
// router.use('/sites', require('./sites_api'));
// router.use('/server', require('./server_api'));
// router.use('/sgroup_server', require('./sgroup_server_api'));
// router.use('/module', require('./module_api'));

module.exports = router;
