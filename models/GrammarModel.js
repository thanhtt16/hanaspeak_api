'use strict'

var logger = require('../utils/logger');
var config = require('config');
var Grammar = require('./Schemas/Grammar');
var GrammarModel = function () {

}

// Create grammar
GrammarModel.createGrammar = function (grammarData) {
    return new Promise((resolve, reject) => {
        let grammarName = grammarData['name'],
            lessionId = grammarData['lession_id'];
        Grammar.findOrCreate({
            defaults: grammarData,
            where: { name: grammarName, lession_id: lessionId }
        }).spread((grammar, created) => {
            if (created)
                return resolve(grammar);
            else
                return reject({ code: 409, message: 'Grammar has existed' });
        }).catch(error => {
            logger.error('GrammarModel.createGrammar has error: ', error);
            return reject({ code: 500, message: 'Create new grammar has error' });
        })
    })
}

// Get grammar with paging
GrammarModel.getGrammars = function (grammarId, limit, page) {
    return new Promise((resolve, reject) => {
        let offset = page * limit;
        let whereObj = {};
        if (grammarId)
            whereObj = { id: grammarId };
        Grammar.findAndCountAll({
            where: whereObj,
            limit: limit,
            offset: offset
        }).then(results => {
            if (results['count'] == 0)
                return reject({ code: 404, message: "Not found any grammar" })
            return resolve(results);
        }).catch(error => {
            logger.error('GrammarModel.getGrammars has error: ', error);
            return reject({ code: 500, message: 'Get grammars error' });
        })
    })
}

// Update grammar
GrammarModel.updateGrammar = function (grammarId, grammarData) {
    return new Promise((resolve, reject) => {
        Grammar.update(grammarData, {
            where: { id: grammarId }
        }).then(result => {
            if (result[0] == 1)
                return resolve('Update grammar success');
            else
                return reject({ code: 404, message: 'grammarId is not existed' });
        }).catch(error => {
            logger.error('GrammarModel.updateGrammar has error: ', error);
            return reject({ code: 500, message: 'Update grammar error' });
        })
    })
}

// Delete grammar
GrammarModel.deleteGrammar = function (grammarId) {
    return new Promise((resolve, reject) => {
        Grammar.destroy({
            where: { id: grammarId }
        }).then(result => {
            if (result == 1)
                return resolve('Delete grammar success');
            else
                return reject({ code: 404, message: 'Not found grammarId' })
        }).catch(error => {
            logger.error('GrammarModel.deleteGrammar has error: ', error);
            return reject({ code: 500, message: 'Delete grammar error' });
        })
    })
}
module.exports = GrammarModel;