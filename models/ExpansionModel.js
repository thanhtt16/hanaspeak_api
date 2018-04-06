'use strict'

var logger = require('../utils/logger');
var config = require('config');
var Expansion = require('./Schemas/Expansion');
var ExpansionModel = function () {

}

// Create Expansion
ExpansionModel.createExpansion = function (expansionData) {
    return new Promise((resolve, reject) => {
        let expansionName = expansionData['name'],
            lessionId = expansionData['lession_id'];
        Expansion.findOrCreate({
            defaults: expansionData,
            where: { name: expansionName, lession_id: lessionId }
        }).spread((expansion, created) => {
            if (created)
                return resolve(expansion);
            else
                return reject({ code: 409, message: 'Expansion has existed' });
        }).catch(error => {
            logger.error('ExpansionModel.createExpansion has error: ', error);
            return reject({ code: 500, message: 'Create new expansion has error' });
        })
    })
}

// Get expansions with paging
ExpansionModel.getExpansions = function (expansionId, limit, page) {
    return new Promise((resolve, reject) => {
        let offset = page * limit;
        let whereObj = {};
        if (expansionId)
            whereObj = { id: expansionId };
        Expansion.findAndCountAll({
            where: whereObj,
            limit: limit,
            offset: offset
        }).then(results => {
            if (results['count'] == 0)
                return reject({ code: 404, message: "Not found any expansion" })
            return resolve(results);
        }).catch(error => {
            logger.error('ExpansionModel.getExpansions has error: ', error);
            return reject({ code: 500, message: 'Get expansion error' });
        })
    })
}

// Update expansion
ExpansionModel.updateExpansion = function (expansionId, expansionData) {
    return new Promise((resolve, reject) => {
        Expansion.update(expansionData, {
            where: { id: expansionId }
        }).then(result => {
            if (result[0] == 1)
                return resolve('Update expansion success');
            else
                return reject({ code: 404, message: 'expansionId is not existed' });
        }).catch(error => {
            logger.error('ExpansionModel.updateExpansion has error: ', error);
            return reject({ code: 500, message: 'Update expansion error' });
        })
    })
}

// Delete expansion
ExpansionModel.deleteExpansion = function (expansionId) {
    return new Promise((resolve, reject) => {
        Expansion.destroy({
            where: { id: expansionId }
        }).then(result => {
            if (result == 1)
                return resolve('Delete expansion success');
            else
                return reject({ code: 404, message: 'Not found expansionId' })
        }).catch(error => {
            logger.error('ExpansionModel.deleteExpansion has error: ', error);
            return reject({ code: 500, message: 'Delete expansion error' });
        })
    })
}
module.exports = ExpansionModel;