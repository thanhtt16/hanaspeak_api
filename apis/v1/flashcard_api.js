'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    FlashCardController = require('../../controllers/FlashCardController'),
    CommonApi = require('./common_api');

// Middleware heck authen token router.use(check_authen); Create new Flash card
router.post('/', (req, res) => {
    CommonApi.create(req, res, FlashCardController.createNewFlashCard);
})

// Get Flash card
router.get('/', (req, res) => {
    let flashCardId = req.query['flash_card_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    CommonApi.get(req, res, flashCardId, limit, page, FlashCardController.getFlashCards);
})

// Update Flash card
router.put('/:id', (req, res) => {
    let flashCardId = req.params['id'],
        flashCardData = req.body;
    CommonApi.update(req, res, flashCardId, flashCardData, FlashCardController.updateFlashCard);
})

// Delete Flash card
router.delete('/:id', (req, res) => {
    let flashCardId = req.params['id'];
    CommonApi.delete(req, res, flashCardId, FlashCardController.deleteFlashCard);
})

module.exports = router;