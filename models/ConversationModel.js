'use strict'

var logger = require('../utils/logger');
var config = require('config');
var Conversation = require('./Schemas/Conversation');
var ConversationModel = function () {

}

// Create Conversation
ConversationModel.createConversation = function (conversationData) {
    return new Promise((resolve, reject) => {
        let conversationName = conversationData['name'];
        Conversation.findOrCreate({
            defaults: conversationData,
            where: { name: conversationName }
        }).spread((conversation, created) => {
            if (created)
                return resolve(conversation);
            else
                return reject({ code: 409, message: 'Conversation has existed' });
        }).catch(error => {
            logger.error('ConversationModel.createConversation has error: ', error);
            return reject({ code: 500, message: 'Create new conversation has error' });
        })
    })
}

// Get conversations with paging
ConversationModel.getConversations = function (conversationId, limit, page) {
    return new Promise((resolve, reject) => {
        let offset = page * limit;
        let whereObj = {};
        if (conversationId)
            whereObj = { id: conversationId };
        Conversation.findAndCountAll({
            where: whereObj,
            limit: limit,
            offset: offset
        }).then(results => {
            if (results['count'] == 0)
                return reject({ code: 404, message: "Not found any conversation" })
            return resolve(results);
        }).catch(error => {
            logger.error('ConversationModel.getConversations has error: ', error);
            return reject({ code: 500, message: 'Get conversations error' });
        })
    })
}

// Update conversation
ConversationModel.updateConversation = function (conversationId, conversationData) {
    return new Promise((resolve, reject) => {
        Conversation.update(conversationData, {
            where: { id: conversationId }
        }).then(result => {
            if (result[0] == 1)
                return resolve('Update conversation success');
            else
                return reject({ code: 404, message: 'conversationId is not existed' });
        }).catch(error => {
            logger.error('ConversationModel.updateConversation has error: ', error);
            return reject({ code: 500, message: 'Update conversation error' });
        })
    })
}

// Delete conversation
ConversationModel.deleteConversation = function (conversationId) {
    return new Promise((resolve, reject) => {
        Conversation.destroy({
            where: { id: conversationId }
        }).then(result => {
            if (result == 1)
                return resolve('Delete conversation success');
            else
                return reject({ code: 404, message: 'Not found conversation_id' })
        }).catch(error => {
            logger.error('ConversationModel.deleteConversation has error: ', error);
            return reject({ code: 500, message: 'Delete conversation error' });
        })
    })
}
module.exports = ConversationModel;