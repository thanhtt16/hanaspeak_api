'use strict'

var logger = require('../utils/logger');
var config = require('config');
var Vocabulary = require('./Schemas/Vocabulary');
var VocabularyModel = function () {

}

// Create Vocabulary
VocabularyModel.createVocabulary = function (vocabularyData) {
    return new Promise((resolve, reject) => {
        let vocabularyName = vocabularyData['name'],
            lessionId = vocabularyData['lession_id'];
        Vocabulary.findOrCreate({
            defaults: vocabularyData,
            where: { name: vocabularyName, lession_id: lessionId }
        }).spread((vocabulary, created) => {
            if (created)
                return resolve(vocabulary);
            else
                return reject({ code: 409, message: 'Vocabulary has existed' });
        }).catch(error => {
            logger.error('VocabularyModel.createVocabulary has error: ', error);
            return reject({ code: 500, message: 'Create new vocabulary has error' });
        })
    })
}

// Get vocabularies with paging
VocabularyModel.getVocabulary = function (vocabularyId, limit, page) {
    return new Promise((resolve, reject) => {
        let offset = page * limit;
        let whereObj = {};
        if (vocabularyId)
            whereObj = { id: vocabularyId };
        Vocabulary.findAndCountAll({
            where: whereObj,
            limit: limit,
            offset: offset
        }).then(results => {
            if (results['count'] == 0)
                return reject({ code: 404, message: "Not found any vocabulary" })
            return resolve(results);
        }).catch(error => {
            logger.error('VocabularyModel.getVocabulary has error: ', error);
            return reject({ code: 500, message: 'Get vocabulary error' });
        })
    })
}

// Update vocabulary
VocabularyModel.updateVocabulary = function (vocabularyId, vocabularyData) {
    return new Promise((resolve, reject) => {
        Vocabulary.update(vocabularyData, {
            where: { id: vocabularyId }
        }).then(result => {
            if (result[0] == 1)
                return resolve('Update vocabulary success');
            else
                return reject({ code: 404, message: 'vocabularyId is not existed' });
        }).catch(error => {
            logger.error('VocabularyModel.updateVocabulary has error: ', error);
            return reject({ code: 500, message: 'Update vocabulary error' });
        })
    })
}

// Delete vocabulary
VocabularyModel.deleteVocabulary = function (vocabularyId) {
    return new Promise((resolve, reject) => {
        Vocabulary.destroy({
            where: { id: vocabularyId }
        }).then(result => {
            if (result == 1)
                return resolve('Delete vocabulary success');
            else
                return reject({ code: 404, message: 'Not found vocabularyId' })
        }).catch(error => {
            logger.error('VocabularyModel.deleteVocabulary has error: ', error);
            return reject({ code: 500, message: 'Delete vocabulary error' });
        })
    })
}
module.exports = VocabularyModel;