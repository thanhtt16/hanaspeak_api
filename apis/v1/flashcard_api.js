'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    FlashCardController = require('../../controllers/FlashCardController');

// Middleware heck authen token router.use(check_authen); Create new Flash card
router.post('/', (req, res) => {
    FlashCardController
        .createNewFlashCard(req.body)
        .then(flashCard => {
            return res
                .status(200)
                .jsend
                .success(flashCard);
        })
        .catch(error => {
            return res
                .status(error['code'])
                .jsend
                .error({code: error['code'], message: error['message']})
        })
})

// Get Flash card
router.get('/', (req, res) => {
    let flashCardId = req.query['flash_card_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    FlashCardController
        .getFlashCards(flashCardId, limit, page)
        .then(results => {
            return res
                .status(200)
                .jsend
                .success(results);
        })
        .catch(error => {
            return res
                .status(error['code'])
                .jsend
                .error({code: error['code'], message: error['message']})
        })
})

// Update Flash card
router.put('/:id', (req, res) => {
    let flashCardId = req.params['id'],
        flashCardData = req.body;
    FlashCardController
        .updateFlashCard(flashCardId, flashCardData)
        .then(result => {
            return res
                .status(200)
                .jsend
                .success(result);
        })
        .catch(error => {
            return res
                .status(error['code'])
                .jsend
                .error({code: error['code'], message: error['message']})
        })
})

// Delete Flash card
router.delete('/:id', (req, res) => {
    let flashCardId = req.params['id'];
    FlashCardController
        .deleteFlashCard(flashCardId)
        .then(result => {
            return res
                .status(200)
                .jsend
                .success(result);
        })
        .catch(error => {
            return res
                .status(error['code'])
                .jsend
                .error({code: error['code'], message: error['message']})
        })
})

module.exports = router;