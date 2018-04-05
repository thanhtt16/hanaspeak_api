'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    ConversationController = require('../../controllers/ConversationController');

// Check authen token
// router.use(check_authen);
// Create new conversation
router.post('/', (req, res) => {
    ConversationController.createConversation(req.body)
        .then(book => {
            return res.status(200).jsend.success(book);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Get list conversation
router.get('/', (req, res) => {
    let conversationId = req.query['conversation_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    ConversationController.getConversations(conversationId, limit, page)
        .then(results => {
            return res.status(200).jsend.success(results);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Update conversation by id
router.put('/:id', (req, res) => {
    let conversationId = req.params['id'],
        conversationData = req.body;
    ConversationController.updateConversation(conversationId, conversationData)
        .then(result => {
            return res.status(200).jsend.success(result);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Delete conversation by id
router.delete('/:id', (req, res) => {
    let conversationId = req.params['id'];
    ConversationController.deleteConversation(conversationId)
        .then(result => {
            return res.status(200).jsend.success(result);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

module.exports = router;