'use strict'

var FlashCardModel = require('../models/FlashCardModel');

var FlashCardController = function () {}

FlashCardController.createNewFlashCard = function (flashCardData) {
    return new Promise((resolve, reject) => {
        FlashCardModel
            .createNewFlashCard(flashCardData)
            .then(flashCard => {
                return resolve(flashCard);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

FlashCardController.getFlashCards = function (flashCardId, limit, page) {
    return new Promise((resolve, reject) => {
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
        FlashCardModel
            .getFlashCards(flashCardId, limit, page)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

FlashCardController.updateFlashCard = function (flashCardId, flashCardData) {
    return new Promise((resolve, reject) => {
        FlashCardModel
            .updateFlashCard(flashCardId, flashCardData)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

FlashCardController.deleteFlashCard = function (flashCardId) {
    return new Promise((resolve, reject) => {
        FlashCardModel
            .deleteFlashCard(flashCardId)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

module.exports = FlashCardController;