var FlashCard = require('./Schemas/Flashcard');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(FlashCard);
var FlashCardModel = function () {}

FlashCardModel.createNewFlashCard = function (flashCardData) {
    return commonModel.create(flashCardData, ['name', 'category_id']);
}

FlashCardModel.getFlashCards = function (flashCardId, limit, page) {
    return commonModel.get(flashCardId, limit, page);
}

FlashCardModel.updateFlashCard = function (flashCardId, flashCardData) {
    return commonModel.update(flashCardId, flashCardData);
}

FlashCardModel.deleteFlashCard = function (flashCardId) {
    return commonModel.delete(flashCardId);
}

module.exports = FlashCardModel;