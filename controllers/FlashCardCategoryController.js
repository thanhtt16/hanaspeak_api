'use strict'

var FlashCardCategoryModel = require('../models/FlashCardCategoryModel');

var FlashCardCategoryController = function () {}

FlashCardCategoryController.createNewFlashCardCategory = function (flashCardCategoryData) {
    return new Promise((resolve, reject) => {
        FlashCardCategoryModel
            .createNewFlashCardCategory(flashCardCategoryData)
            .then(flashCardCategory => {
                return resolve(flashCardCategory);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

FlashCardCategoryController.getFlashCardCategories = function (categoryId, limit, page) {
    return new Promise((resolve, reject) => {
        try {
            limit = parseInt(limit);
            page = parseInt(page);
            if (!limit || limit < 0) 
                limit = 100;
            if (!page || page < 0) 
                page = 0;
            }
        catch (ex) {
            limit = 100;
            page = 0;
        }
        FlashCardCategoryModel
            .getFlashCardCategory(categoryId, limit, page)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

FlashCardCategoryController.updateFlashCardCategory = function (categoryId, flashCardCategoryData) {
    return new Promise((resolve, reject) => {
        FlashCardCategoryModel
            .updateFlashCardCategory(categoryId, flashCardCategoryData)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

FlashCardCategoryController.deleteFlashCardCategory = function (categoryId) {
    return new Promise((resolve, reject) => {
        FlashCardCategoryModel
            .deleteFlashCardCategory(categoryId)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

module.exports = FlashCardCategoryController;