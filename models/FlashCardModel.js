var logger = require('../utils/logger');
var FlashCard = require('./Schemas/Flashcard');
var FlashCardModel = function () {}

FlashCardModel.createNewFlashCard = function (flashCardData) {
    return new Promise((resolve, reject) => {
        FlashCard
            .findCreateFind({
            defaults: flashCardData,
            where: {
                name: flashCardData['name']
            }
        })
            .spread((flashCard, created) => {
                if (created) 
                    return resolve(flashCard);
                else 
                    return reject({code: 409, message: 'FlashCard has existed'});
                }
            )
            .catch(error => {
                logger.error('FlashCard.createNewFlashCard create new flash card error: ', error);
                return reject({code: 500, message: 'Create new flash card error'});
            })
    })
}

module.exports = FlashCardModel;