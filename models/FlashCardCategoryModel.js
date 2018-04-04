var logger = require('../utils/logger');
var FlashCardCategory = require('./Schemas/FlashCardCategory');
var FlashCardCategoryModel = function () {}

FlashCardCategoryModel.createNewFlashCardCategory = function (flashCardCategoryData) {
    return new Promise((resolve, reject) => {
        FlashCardCategory
            .findCreateFind({
            defaults: flashCardCategoryData,
            where: {
                name: flashCardCategoryData['name']
            }
        })
            .spread((flashCardCategory, created) => {
                if (created) 
                    return resolve(flashCardCategory);
                else 
                    return reject({code: 409, message: 'FlashCardCategory has existed'});
                }
            )
            .catch(error => {
                logger.error('FlashCardCategoryModel.createNewFlashCardCategory create new flash card category' +
                        ' error: ',
                error);
                return reject({code: 500, message: 'Create new flash card category error'});
            })
    })
}

FlashCardCategoryModel.getFlashCardCategory = function (categoryId, limit, page) {
    return new Promise((resolve, reject) => {
        let offset = page * limit;
        let whereObj = {};
        if (categoryId) 
            whereObj = {
                id: categoryId
            };
        FlashCardCategory.findAndCountAll({
            where: whereObj,
            attributes: [
                'id', 'name'
            ],
            order: [
                ['id', 'ASC']
            ],
            offset: offset,
            limit: limit
        }).then(result => {
            if (result['count'] == 0) 
                return reject({code: 404, message: "Not found any category"})
            return resolve(result);
        }).catch(error => {
            logger.error('FlashCardCategoryModel.getFlashCardCategory has error: ', error);
            return reject({code: 500, message: 'Get flash card category error'});
        })
    })
}

FlashCardCategoryModel.updateFlashCardCategory = function (categoryId, flashCardCategoryData) {
    return new Promise((resolve, reject) => {
        FlashCardCategory
            .update(flashCardCategoryData, {
            where: {
                id: categoryId
            }
        })
            .then(result => {
                if (result[0] == 1) 
                    return resolve('Update flash card category success');
                else 
                    return reject({code: 404, message: 'categoryId is not existed'});
                }
            )
            .catch(error => {
                logger.error('FlashCardCategoryModel.updateFlashCardCategory has error: ', error);
                return reject({code: 500, message: 'Update flash card category error'});
            })
    })
}

FlashCardCategoryModel.deleteFlashCardCategory = function (categoryId) {
    return new Promise((resolve, reject) => {
        FlashCardCategoryModel
            .destroy({
            where: {
                id: categoryId
            }
        })
            .then(result => {
                if (result == 1) 
                    return resolve('Delete flash card category success');
                else 
                    return reject({code: 404, message: 'Not found categoryId'})
            })
            .catch(error => {
                logger.error('FlashCardCategoryModel.deleteFlashCardCategory has error: ', error);
                return reject({code: 500, message: 'Delete flash card category error'});
            })
    })
}

module.exports = FlashCardCategoryModel;