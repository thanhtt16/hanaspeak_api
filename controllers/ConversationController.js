'use strict'

var ConversationModel = require('../models/ConversationModel');

var ConversationController = function () {

}

ConversationController.createConversation = function (conversationData) {
    return new Promise((resolve, reject) => {
        ConversationModel.createConversation(conversationData)
            .then(conversation => {
                return resolve(conversation);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

ConversationController.getConversations = function (conversationId, limit, page) {
    return new Promise((resolve, reject) => {
        try {
            limit = parseInt(limit);
            page = parseInt(page);
            if (!limit || limit < 0) limit = 10;
            if (!page || page < 0) page = 0;
        } catch (ex) {
            limit = 10;
            page = 0;
        }
        ConversationModel.getConversations(conversationId, limit, page)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

ConversationController.updateConversation = function (conversationId, conversationData) {
    return new Promise((resolve, reject) => {
        ConversationModel.updateConversation(conversationId, conversationData)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

ConversationController.deleteConversation = function (conversationId) {
    return new Promise((resolve, reject) => {
        ConversationModel.deleteConversation(conversationId)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}


module.exports = ConversationController;