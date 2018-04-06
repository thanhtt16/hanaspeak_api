'use strict'

var ExpansionModel = require('../models/ExpansionModel');

var ExpansionController = function () {

}

ExpansionController.createExpansion = function (expansionData) {
    return new Promise((resolve, reject) => {
        ExpansionModel.createExpansion(expansionData)
            .then(expansion => {
                return resolve(expansion);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

ExpansionController.getExpansions = function (expansionId, limit, page) {
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
        ExpansionModel.getExpansions(expansionId, limit, page)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

ExpansionController.updateExpansion = function (expansionId, expansionData) {
    return new Promise((resolve, reject) => {
        ExpansionModel.updateExpansion(expansionId, expansionData)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

ExpansionController.deleteExpansion = function (expansionId) {
    return new Promise((resolve, reject) => {
        ExpansionModel.deleteExpansion(expansionId)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}


module.exports = ExpansionController;