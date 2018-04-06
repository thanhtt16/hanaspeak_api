'use strict'

var logger = require('../utils/logger');
var config = require('config');
var Lession = require('./Schemas/Lession');
var LessionModel = function () {

}

// Create Lession
LessionModel.createLession = function (lessionData) {
    return new Promise((resolve, reject) => {
        let lessionName = lessionData['name'],
            bookId = lessionData['book_id'];
        Lession.findOrCreate({
            defaults: lessionData,
            where: { name: lessionName , book_id: bookId}
        }).spread((lession, created) => {
            if (created)
                return resolve(lession);
            else
                return reject({ code: 409, message: 'Lession has existed' });
        }).catch(error => {
            logger.error('LessionModel.createLession has error: ', error);
            return reject({ code: 500, message: 'Create new lession has error' });
        })
    })
}

// Get lessions with paging
LessionModel.getLessions = function (lessionId, limit, page, queryOptions) {
    return new Promise((resolve, reject) => {
        let offset = page * limit;
        let whereObj = {};
        if (lessionId)
            whereObj = { id: lessionId };
        for(let key in queryOptions)
            whereObj[key] = queryOptions[key]
        Lession.findAndCountAll({
            attributes: ['id', 'name', 'book_id'],
            where: whereObj,
            limit: limit,
            offset: offset,
            order: [['id', 'ASC']]
        }).then(results => {
            if (results['count'] == 0)
                return reject({ code: 404, message: "Not found any lession" })
            return resolve(results);
        }).catch(error => {
            logger.error('LessionModel.getLessions has error: ', error);
            return reject({ code: 500, message: 'Get lessions error' });
        })
    })
}

// Update lession
LessionModel.updateLession = function (lessionId, lessionData) {
    return new Promise((resolve, reject) => {
        Lession.update(lessionData, {
            where: { id: lessionId }
        }).then(result => {
            if (result[0] == 1)
                return resolve('Update lession success');
            else
                return reject({ code: 404, message: 'lession_id is not existed' });
        }).catch(error => {
            logger.error('LessionModel.updateLession has error: ', error);
            return reject({ code: 500, message: 'Update lession error' });
        })
    })
}

// Delete lession
LessionModel.deleteLession = function (lessionId) {
    return new Promise((resolve, reject) => {
        Lession.destroy({
            where: { id: lessionId }
        }).then(result => {
            if (result == 1)
                return resolve('Delete lession success');
            else
                return reject({ code: 404, message: 'Not found lession_id' })
        }).catch(error => {
            logger.error('LessionModel.deleteLession has error: ', error);
            return reject({ code: 500, message: 'Delete lession error' });
        })
    })
}
module.exports = LessionModel;