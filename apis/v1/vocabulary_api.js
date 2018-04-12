'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    VocabularyController = require('../../controllers/VocabularyController'),
    CommonApi = require('./common_api');

// Check authen token router.use(check_authen); Create new vocabulary
router.post('/', (req, res) => {
    CommonApi.create(req, res, VocabularyController.createVocabulary);
})

// Get list vocabulary
router.get('/', (req, res) => {
    let vocabularyId = req.query['vocabulary_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    CommonApi.get(req, res, vocabularyId, limit, page, VocabularyController.getVocabulary);
})

// Update vocabulary by id
router.put('/:id', (req, res) => {
    let vocabularyId = req.params['id'],
        vocabularyData = req.body;
    CommonApi.update(req, res, vocabularyId, vocabularyData, VocabularyController.updateVocabulary);
})

// Delete vocabulary by id
router.delete('/:id', (req, res) => {
    let vocabularyId = req.params['id'];
    CommonApi.delete(req, res, vocabularyId, VocabularyController.deleteVocabulary);
})

module.exports = router;