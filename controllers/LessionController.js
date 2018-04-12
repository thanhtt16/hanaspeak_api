'use strict'

var LessionModel = require('../models/LessionModel');

var LessionController = function () {}

LessionController.createLession = function (lessionData) {
    return LessionModel.createLession(lessionData);
}

LessionController.getLessions = function (lessionId, limit, page, queryOptions) {
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
    return LessionModel.getLessions(lessionId, limit, page, queryOptions);
}

LessionController.updateLession = function (lessionId, lessionData) {
    return LessionModel.updateLession(lessionId, lessionData);
}

LessionController.deleteLession = function (lessionId) {
    return LessionModel.deleteLession(lessionId);
}

module.exports = LessionController;