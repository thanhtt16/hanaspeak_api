'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    LessionController = require('../../controllers/LessionController'),
    CommonApi = require('./common_api');

// Check authen token router.use(check_authen); Create new lession
router.post('/', (req, res) => {
    CommonApi.create(req, res, LessionController.createLession);
})

// Get list lession
router.get('/', (req, res) => {
    let lessionId = req.query['lession_id'],
        limit = req.query['limit'],
        page = req.query['page'],
        bookId = req.query['book_id'],
        queryOptions = {};
    if (bookId) 
        queryOptions['book_id'] = bookId;
    LessionController
        .getLessions(lessionId, limit, page, queryOptions)
        .then(results => {
            return res
                .status(200)
                .jsend
                .success(results);
        })
        .catch(error => {
            return res
                .status(error['code'])
                .jsend
                .error({code: error['code'], message: error['message']})
        })
})

// Update lession by id
router.put('/:id', (req, res) => {
    let lessionId = req.params['id'],
        lessionData = req.body;
    CommonApi.update(req, res, lessionId, lessionData, LessionController.updateLession);
})

// Delete lession by id
router.delete('/:id', (req, res) => {
    let lessionId = req.params['id'];
    CommonApi.delete(req, res, lessionId, LessionController.deleteLession);
})

module.exports = router;