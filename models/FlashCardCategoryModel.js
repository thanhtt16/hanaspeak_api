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

FlashCardCategoryModel.getAllCategory = function () {
    return new Promise((resolve, reject) => {
        FlashCardCategory.findAll({
            attributes: ['id', 'name'],
            order: [['id', 'ASC']]
        }).then(result => {
            if (result['length'] == 0) 
                return reject({code: 404, message: "Not found any category"})
            return resolve(result);
        }).catch(error => {
            logger.error('UserModel.getUsers has error: ', error);
            return reject({code: 500, message: 'Get category error'});
        })
    })
}

module.exports = FlashCardCategoryModel;