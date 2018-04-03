'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    FlashCardController = require('../../controllers/FlashCardController');

// Middleware heck authen token
// router.use(check_authen);

// Create new Flash card
router.post('/', (req, res) => {
    FlashCardController.createNewFlashCard(req.body)
        .then(flashCard => {
            return res.status(200).jsend.success(flashCard);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Get all Flash card
router.get('/', (req, res)=>{
    FlashCardController.getFlashCard(req.body)
        .then(flashCard => {
            return res.status(200).jsend.success(flashCard);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

module.exports = router;