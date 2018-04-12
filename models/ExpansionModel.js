'use strict'

var Expansion = require('./Schemas/Expansion');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(Expansion);
var ExpansionModel = function () {}

// Create Expansion
ExpansionModel.createExpansion = function (expansionData) {
    return commonModel.create(expansionData, ['name', 'lession_id']);
}

// Get expansions with paging
ExpansionModel.getExpansions = function (expansionId, limit, page) {
    return commonModel.get(expansionId, limit, page);
}

// Update expansion
ExpansionModel.updateExpansion = function (expansionId, expansionData) {
    return commonModel.update(expansionId, expansionData);
}

// Delete expansion
ExpansionModel.deleteExpansion = function (expansionId) {
    return commonModel.delete(expansionId);
}
module.exports = ExpansionModel;