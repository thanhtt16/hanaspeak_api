'use strict'

var Vocabulary = require('./Schemas/Vocabulary');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(Vocabulary);
var VocabularyModel = function () {}

// Create Vocabulary
VocabularyModel.createVocabulary = function (vocabularyData) {
    return commonModel.create(vocabularyData, ['name', 'lession_id']);
}

// Get vocabularies with paging
VocabularyModel.getVocabulary = function (vocabularyId, limit, page) {
    return commonModel.get(vocabularyId, limit, page);
}

// Update vocabulary
VocabularyModel.updateVocabulary = function (vocabularyId, vocabularyData) {
    return commonModel.update(vocabularyId, vocabularyData);
}

// Delete vocabulary
VocabularyModel.deleteVocabulary = function (vocabularyId) {
    return commonModel.delete(vocabularyId);
}
module.exports = VocabularyModel;