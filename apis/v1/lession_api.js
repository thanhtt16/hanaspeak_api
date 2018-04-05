'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    LessionController = require('../../controllers/LessionController');

// Check authen token
// router.use(check_authen);
// Create new lession
router.post('/', (req, res) => {
    LessionController.createLession(req.body)
        .then(lession => {
            return res.status(200).jsend.success(lession);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Get list lession
router.get('/', (req, res) => {
    let lessionId = req.query['lession_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    LessionController.getLessions(lessionId, limit, page)
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

// Update lession by id
router.put('/:id', (req, res) => {
    let lessionId = req.params['id'],
        lessionData = req.body;
    LessionController.updateLession(lessionId, lessionData)
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

// Delete lession by id
router.delete('/:id', (req, res) => {
    let lessionId = req.params['id'];
    LessionController.deleteLession(lessionId)
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