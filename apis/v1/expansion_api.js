'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    ExpansionController = require('../../controllers/ExpansionController'),
    CommonApi = require('./common_api');

// Check authen token router.use(check_authen); Create new expansion
router.post('/', (req, res) => {
    CommonApi.create(req, res, ExpansionController.createExpansion);
})

// Get list expansion
router.get('/', (req, res) => {
    let expansionId = req.query['expansion_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    CommonApi.get(req, res, expansionId, limit, page, ExpansionController.getExpansions);
})

// Update expansion by id
router.put('/:id', (req, res) => {
    let expansionId = req.params['id'],
        expansionData = req.body;
    CommonApi.update(req, res, expansionId, expansionData, ExpansionController.updateExpansion);
})

// Delete expansion by id
router.delete('/:id', (req, res) => {
    let expansionId = req.params['id'];
    CommonApi.delete(req, res, expansionId, ExpansionController.deleteExpansion);
})

module.exports = router;