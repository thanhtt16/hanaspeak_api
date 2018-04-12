'use strict'

var ExpansionModel = require('../models/ExpansionModel');

var ExpansionController = function () {}

ExpansionController.createExpansion = function (expansionData) {
    return ExpansionModel.createExpansion(expansionData);
}

ExpansionController.getExpansions = function (expansionId, limit, page) {
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
    return ExpansionModel.getExpansions(expansionId, limit, page);
}

ExpansionController.updateExpansion = function (expansionId, expansionData) {
    return ExpansionModel.updateExpansion(expansionId, expansionData);
}

ExpansionController.deleteExpansion = function (expansionId) {
    return ExpansionModel.deleteExpansion(expansionId);
}

module.exports = ExpansionController;