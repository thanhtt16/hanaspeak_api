'use strict'

var Conversation = require('./Schemas/Conversation');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(Conversation);
var ConversationModel = function () {}

// Create Conversation
ConversationModel.createConversation = function (conversationData) {
    return commonModel.create(conversationData, ['name', 'lession_id']);
}

// Get conversations with paging
ConversationModel.getConversations = function (conversationId, limit, page) {
    return commonModel.get(conversationId, limit, page);
}

// Update conversation
ConversationModel.updateConversation = function (conversationId, conversationData) {
    return commonModel.update(conversationId, conversationData);
}

// Delete conversation
ConversationModel.deleteConversation = function (conversationId) {
    return commonModel.delete(conversationId);
}
module.exports = ConversationModel;