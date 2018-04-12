var FlashCardCategory = require('./Schemas/FlashCardCategory');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(FlashCardCategory);
var FlashCardCategoryModel = function () {}

FlashCardCategoryModel.createNewFlashCardCategory = function (flashCardCategoryData) {
    return commonModel.create(flashCardCategoryData, ['name']);
}

FlashCardCategoryModel.getFlashCardCategory = function (categoryId, limit, page) {
    let attributes = [
            'id', 'name'
        ],
        order = [
            ['id', 'ASC']
        ];
    return commonModel.get(categoryId, limit, page, attributes, order);
}

FlashCardCategoryModel.updateFlashCardCategory = function (categoryId, flashCardCategoryData) {
    return commonModel.update(categoryId, flashCardCategoryData);
}

FlashCardCategoryModel.deleteFlashCardCategory = function (categoryId) {
    return commonModel.delete(categoryId);
}

module.exports = FlashCardCategoryModel;