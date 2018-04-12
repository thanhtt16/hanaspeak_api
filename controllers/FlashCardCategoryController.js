'use strict'

var FlashCardCategoryModel = require('../models/FlashCardCategoryModel');

var FlashCardCategoryController = function () {}

FlashCardCategoryController.createNewFlashCardCategory = function (flashCardCategoryData) {
    return FlashCardCategoryModel.createNewFlashCardCategory(flashCardCategoryData);
}

FlashCardCategoryController.getFlashCardCategories = function (categoryId, limit, page) {
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
    return FlashCardCategoryModel.getFlashCardCategory(categoryId, limit, page);
}

FlashCardCategoryController.updateFlashCardCategory = function (categoryId, flashCardCategoryData) {
    return FlashCardCategoryModel.updateFlashCardCategory(categoryId, flashCardCategoryData);
}

FlashCardCategoryController.deleteFlashCardCategory = function (categoryId) {
    return FlashCardCategoryModel.deleteFlashCardCategory(categoryId);
}

module.exports = FlashCardCategoryController;