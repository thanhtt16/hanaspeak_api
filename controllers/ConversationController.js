'use strict'

var ConversationModel = require('../models/ConversationModel');

var ConversationController = function () {}

ConversationController.createConversation = function (conversationData) {
    return ConversationModel.createConversation(conversationData);
}

ConversationController.getConversations = function (conversationId, limit, page) {
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
    return ConversationModel.getConversations(conversationId, limit, page);
}

ConversationController.updateConversation = function (conversationId, conversationData) {
    return ConversationModel.updateConversation(conversationId, conversationData);
}

ConversationController.deleteConversation = function (conversationId) {
    return ConversationModel.deleteConversation(conversationId);
}

module.exports = ConversationController;