'use strict'

var VocabularyModel = require('../models/VocabularyModel');

var VocabularyController = function () {}

VocabularyController.createVocabulary = function (vocabularyData) {
    return VocabularyModel.createVocabulary(vocabularyData);
}

VocabularyController.getVocabulary = function (vocabularyId, limit, page) {
    try {
        limit = parseInt(limit);
        page = parseInt(page);
        if (!limit || limit < 0) 
            limit = 10;
        if (!page || page < 0) 
            page = 0;
        }
    catch (ex) {
        limit = 10;
        page = 0;
    }
    return VocabularyModel.getVocabulary(vocabularyId, limit, page);
}

VocabularyController.updateVocabulary = function (vocabularyId, vocabularyData) {
    return VocabularyModel.updateVocabulary(vocabularyId, vocabularyData);
}

VocabularyController.deleteVocabulary = function (vocabularyId) {
    return VocabularyModel.deleteVocabulary(vocabularyId);
}

module.exports = VocabularyController;