'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    ExpansionController = require('../../controllers/ExpansionController');

// Check authen token
// router.use(check_authen);
// Create new expansion
router.post('/', (req, res) => {
    ExpansionController.createExpansion(req.body)
        .then(expansion => {
            return res.status(200).jsend.success(expansion);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Get list expansion
router.get('/', (req, res) => {
    let expansionId = req.query['expansion_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    ExpansionController.getExpansions(expansionId, limit, page)
        .then(results => {
            return res.status(200).jsend.success(results);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Update expansion by id
router.put('/:id', (req, res) => {
    let expansionId = req.params['id'],
        expansionData = req.body;
    ExpansionController.updateExpansion(expansionId, expansionData)
        .then(result => {
            return res.status(200).jsend.success(result);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Delete expansion by id
router.delete('/:id', (req, res) => {
    let expansionId = req.params['id'];
    ExpansionController.deleteExpansion(expansionId)
        .then(result => {
            return res.status(200).jsend.success(result);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

module.exports = router;