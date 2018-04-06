'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    VocabularyController = require('../../controllers/VocabularyController');

// Check authen token
// router.use(check_authen);
// Create new vocabulary
router.post('/', (req, res) => {
    VocabularyController.createVocabulary(req.body)
        .then(book => {
            return res.status(200).jsend.success(book);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Get list vocabulary
router.get('/', (req, res) => {
    let vocabularyId = req.query['vocabulary_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    VocabularyController.getVocabulary(vocabularyId, limit, page)
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

// Update vocabulary by id
router.put('/:id', (req, res) => {
    let vocabularyId = req.params['id'],
        vocabularyData = req.body;
    VocabularyController.updateVocabulary(vocabularyId, vocabularyData)
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

// Delete vocabulary by id
router.delete('/:id', (req, res) => {
    let vocabularyId = req.params['id'];
    VocabularyController.deleteVocabulary(vocabularyId)
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