'use strict'

var Grammar = require('./Schemas/Grammar');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(Grammar);
var GrammarModel = function () {}

// Create grammar
GrammarModel.createGrammar = function (grammarData) {
    return commonModel.create(grammarData, ['name', 'lession_id']);
}

// Get grammar with paging
GrammarModel.getGrammars = function (grammarId, limit, page) {
    return commonModel.get(grammarId, limit, page);
}

// Update grammar
GrammarModel.updateGrammar = function (grammarId, grammarData) {
    return commonModel.update(grammarId, grammarData);
}

// Delete grammar
GrammarModel.deleteGrammar = function (grammarId) {
    return commonModel.delete(grammarId);
}
module.exports = GrammarModel;