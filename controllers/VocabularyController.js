'use strict'

var VocabularyModel = require('../models/VocabularyModel');

var VocabularyController = function () {

}

VocabularyController.createVocabulary = function (vocabularyData) {
    return new Promise((resolve, reject) => {
        VocabularyModel.createVocabulary(vocabularyData)
            .then(vocabulary => {
                return resolve(vocabulary);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

VocabularyController.getVocabulary = function (vocabularyId, limit, page) {
    return new Promise((resolve, reject) => {
        try {
            limit = parseInt(limit);
            page = parseInt(page);
            if (!limit || limit < 0) limit = 10;
            if (!page || page < 0) page = 0;
        } catch (ex) {
            limit = 10;
            page = 0;
        }
        VocabularyModel.getVocabulary(vocabularyId, limit, page)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

VocabularyController.updateVocabulary = function (vocabularyId, vocabularyData) {
    return new Promise((resolve, reject) => {
        VocabularyModel.updateVocabulary(vocabularyId, vocabularyData)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

VocabularyController.deleteVocabulary = function (vocabularyId) {
    return new Promise((resolve, reject) => {
        VocabularyModel.deleteVocabulary(vocabularyId)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}


module.exports = VocabularyController;