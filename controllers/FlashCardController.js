'use strict'

var FlashCardModel = require('../models/FlashCardModel');

var FlashCardController = function () {

}

FlashCardController.createNewFlashCard = function (flashCardData) {
    return new Promise((resolve, reject) => {
        FlashCardModel.createNewFlashCard(flashCardData)
            .then(flashCard => {
                return resolve(flashCard);
            })
            .catch(error => {
                return reject(error);
            })
    })
}


module.exports = FlashCardController;