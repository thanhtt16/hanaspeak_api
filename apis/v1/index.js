'use strict';

var express = require('express'),
    router = express.Router(),
    login_api = require('./login_api');

// Import Route
router.use("/login", login_api);
router.use("/signup", )
// router.all('/users*', [require('../../middlewares/auth')]);
// router.use('/sites', require('./sites_api'));
// router.use('/server', require('./server_api'));
// router.use('/sgroup_server', require('./sgroup_server_api'));
// router.use('/module', require('./module_api'));

module.exports = router;
