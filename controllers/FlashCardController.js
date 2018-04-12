'use strict'

var FlashCardModel = require('../models/FlashCardModel');

var FlashCardController = function () {}

FlashCardController.createNewFlashCard = function (flashCardData) {
    return FlashCardModel.createNewFlashCard(flashCardData);
}

FlashCardController.getFlashCards = function (flashCardId, limit, page) {
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
    return FlashCardModel.getFlashCards(flashCardId, limit, page);
}

FlashCardController.updateFlashCard = function (flashCardId, flashCardData) {
    return FlashCardModel.updateFlashCard(flashCardId, flashCardData);
}

FlashCardController.deleteFlashCard = function (flashCardId) {
    return FlashCardModel.deleteFlashCard(flashCardId);
}

module.exports = FlashCardController;