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

FlashCardModel.getFlashCards = function (flashCardId, limit, page) {
    return new Promise((resolve, reject) => {
        let offset = page * limit;
        let whereObj = {};
        if (flashCardId) 
            whereObj = {
                id: flashCardId
            };
        FlashCard
            .findAndCountAll({where: whereObj, offset: offset, limit: limit})
            .then(result => {
                if (result['count'] == 0) 
                    return reject({code: 404, message: "Not found any flash card"})
                return resolve(result);
            })
            .catch(error => {
                logger.error('FlashCardModel.getFlashCards has error: ', error);
                return reject({code: 500, message: 'Get flash cards error'});
            })
    })
}

FlashCardModel.updateFlashCard = function (flashCardId, flashCardData) {
    return new Promise((resolve, reject) => {
        FlashCard
            .update(flashCardData, {
            where: {
                id: flashCardId
            }
        })
            .then(result => {
                if (result[0] == 1) 
                    return resolve('Update flash card success');
                else 
                    return reject({code: 404, message: 'flashCardId is not existed'});
                }
            )
            .catch(error => {
                logger.error('FlashCardModel.updateFlashCard has error: ', error);
                return reject({code: 500, message: 'Update flash card error'});
            })
    })
}

FlashCardModel.deleteFlashCard = function (flashCardId) {
    return new Promise((resolve, reject) => {
        FlashCard
            .destroy({
            where: {
                id: flashCardId
            }
        })
            .then(result => {
                if (result == 1) 
                    return resolve('Delete flash card success');
                else 
                    return reject({code: 404, message: 'Not found flashCardId'})
            })
            .catch(error => {
                logger.error('FlashCardModel.deleteFlashCard has error: ', error);
                return reject({code: 500, message: 'Delete flash card error'});
            })
    })
}

module.exports = FlashCardModel;