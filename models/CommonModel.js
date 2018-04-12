'use strict'

var logger = require('../utils/logger');
class CommonModel {
    constructor(schema) {
        this.schema = schema;
        this.modelName = schema.name;
    }

    create(data, keyFinds = []) {
        let self = this;
        return new Promise((resolve, reject) => {
            let whereObj = {};
            if (keyFinds.length > 0) {
                for (var key of keyFinds) {
                    whereObj[key] = data[key];
                }
            }
            self
                .schema
                .findCreateFind({defaults: data, where: whereObj})
                .spread((modelInstance, created) => {
                    if (created) 
                        return resolve(modelInstance);
                    else 
                        return reject({code: 409, message: `Conflict! ${self.modelName} has existed`});
                    }
                )
                .catch(error => {
                    logger.error(`Create ${self.modelName} has error: `, error);
                    return reject({code: 500, message: `Create new ${self.modelName} error`});
                })
        })
    }

    get(id, limit, page, attributes = null, order = null, queryOptions = {}) {
        let self = this;
        return new Promise((resolve, reject) => {
            let offset = page * limit,
                whereObj = {};
            if (id) 
                whereObj = {
                    id: id
                };
            for (let key in queryOptions) 
                whereObj[key] = queryOptions[key]
            let findObj = {
                where: whereObj,
                offset: offset,
                limit: limit
            };
            if (attributes) 
                findObj['attributes'] = attributes;
            if (order) 
                findObj['order'] = order;
            self
                .schema
                .findAndCountAll(findObj)
                .then(result => {
                    if (result['count'] == 0) 
                        return reject({code: 404, message: "Not found any record"})
                    return resolve(result);
                })
                .catch(error => {
                    logger.error(`Get ${self.modelName} has error: `, error);
                    return reject({code: 500, message: `Get ${self.modelName} has error`});
                })
        })
    }

    update(id, data) {
        let self = this;
        return new Promise((resolve, reject) => {
            self
                .schema
                .update(data, {
                    where: {
                        id: id
                    }
                })
                .then(result => {
                    if (result[0] == 1) 
                        return resolve(`Update ${self.modelName} success`);
                    else 
                        return reject({code: 404, message: 'id is not existed'});
                    }
                )
                .catch(error => {
                    logger.error(`Update ${self.modelName} has error: `, error);
                    return reject({code: 500, message: `Update ${self.modelName} has error`});
                })
        })
    }

    delete(id) {
        let self = this;
        return new Promise((resolve, reject) => {
            self
                .schema
                .destroy({
                    where: {
                        id: id
                    }
                })
                .then(result => {
                    if (result == 1) 
                        return resolve(`Delete ${self.modelName} success`);
                    else 
                        return reject({code: 404, message: 'id not found'})
                })
                .catch(error => {
                    logger.error(`Delete ${self.modelName} has error: `, error);
                    return reject({code: 500, message: `Delete ${self.modelName} error`});
                })
        })
    }
}

module.exports = CommonModel;