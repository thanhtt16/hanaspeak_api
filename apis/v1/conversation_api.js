'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    ConversationController = require('../../controllers/ConversationController'),
    CommonApi = require('./common_api');

// Check authen token router.use(check_authen); Create new conversation
router.post('/', (req, res) => {
    CommonApi.create(req, res, ConversationController.createConversation);
})

// Get list conversation
router.get('/', (req, res) => {
    let conversationId = req.query['conversation_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    CommonApi.get(req, res, conversationId, limit, page, ConversationController.getConversations);
})

// Update conversation by id
router.put('/:id', (req, res) => {
    let conversationId = req.params['id'],
        conversationData = req.body;
    CommonApi.update(req, res, conversationId, conversationData, ConversationController.updateConversation);
})

// Delete conversation by id
router.delete('/:id', (req, res) => {
    let conversationId = req.params['id'];
    CommonApi.delete(req, res, conversationId, ConversationController.deleteConversation);
})

module.exports = router;