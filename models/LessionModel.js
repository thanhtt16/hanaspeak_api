'use strict'

var Lession = require('./Schemas/Lession');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(Lession);
var LessionModel = function () {}

// Create Lession
LessionModel.createLession = function (lessionData) {
    return commonModel.create(lessionData, ['name', 'book_id']);
}

// Get lessions with paging
LessionModel.getLessions = function (lessionId, limit, page, queryOptions) {
    let attributes = [
            'id', 'name', 'book_id'
        ],
        order = [
            ['id', 'ASC']
        ];
    return commonModel.get(lessionId, limit, page, attributes, order, queryOptions);
}

// Update lession
LessionModel.updateLession = function (lessionId, lessionData) {
    return commonModel.update(lessionId, lessionData);
}

// Delete lession
LessionModel.deleteLession = function (lessionId) {
    return commonModel.delete(lessionId);
}
module.exports = LessionModel;