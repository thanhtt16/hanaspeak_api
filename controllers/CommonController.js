'use strict'
class CommmonController {
    constructor() {}

    static create(data, modelFunction) {
        return modelFunction(data);
    }

    static get(id, limit, page, modelFunction) {
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
        return modelFunction(id, limit, page);
    }

    static update(id, data, modelFunction) {
        return modelFunction(id, data);
    }

    delete(id, modelFunction) {
        return modelFunction(id);
    }
}

module.exports = CommmonController;