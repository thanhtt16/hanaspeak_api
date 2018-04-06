'use strict'

var GrammarModel = require('../models/GrammarModel');

var GrammarController = function () {

}

GrammarController.createGrammar = function (grammarData) {
    return new Promise((resolve, reject) => {
        GrammarModel.createGrammar(grammarData)
            .then(grammar => {
                return resolve(grammar);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

GrammarController.getGrammars = function (grammarId, limit, page) {
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
        GrammarModel.getGrammars(grammarId, limit, page)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

GrammarController.updateGrammar = function (grammarId, grammarData) {
    return new Promise((resolve, reject) => {
        GrammarModel.updateGrammar(grammarId, grammarData)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

GrammarController.deleteGrammar = function (grammarId) {
    return new Promise((resolve, reject) => {
        GrammarModel.deleteGrammar(grammarId)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}


module.exports = GrammarController;