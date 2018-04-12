'use strict'

var GrammarModel = require('../models/GrammarModel');

var GrammarController = function () {}

GrammarController.createGrammar = function (grammarData) {
    return GrammarModel.createGrammar(grammarData);
}

GrammarController.getGrammars = function (grammarId, limit, page) {
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
    return GrammarModel.getGrammars(grammarId, limit, page);
}

GrammarController.updateGrammar = function (grammarId, grammarData) {
    return GrammarModel.updateGrammar(grammarId, grammarData);
}

GrammarController.deleteGrammar = function (grammarId) {
    return GrammarModel.deleteGrammar(grammarId);
}

module.exports = GrammarController;