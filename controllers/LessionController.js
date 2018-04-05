'use strict'

var LessionModel = require('../models/LessionModel');

var LessionController = function () {

}

LessionController.createLession = function (lessionData) {
    return new Promise((resolve, reject) => {
        LessionModel.createLession(lessionData)
            .then(lession => {
                return resolve(lession);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

LessionController.getLessions = function (lessionId, limit, page, queryOptions) {
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
        LessionModel.getLessions(lessionId, limit, page, queryOptions)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

LessionController.updateLession = function (lessionId, lessionData) {
    return new Promise((resolve, reject) => {
        LessionModel.updateLession(lessionId, lessionData)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

LessionController.deleteLession = function (lessionId) {
    return new Promise((resolve, reject) => {
        LessionModel.deleteLession(lessionId)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}


module.exports = LessionController;