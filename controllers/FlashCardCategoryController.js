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

FlashCardCategoryController.getAllCategory = function () {
    return new Promise((resolve, reject) => {
        FlashCardCategoryModel
            .getAllCategory()
            .then(result => {
                return resolve(result)
            })
            .catch(error => {
                return reject(error);
            })
    })
}

module.exports = FlashCardCategoryController;