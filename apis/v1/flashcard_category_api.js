'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    FlashCardCategoryController = require('../../controllers/FlashCardCategoryController');

// Middleware heck authen token
// router.use(check_authen);

// Create new Flash card category
router.post('/', (req, res) => {
    FlashCardCategoryController.createNewFlashCardCategory(req.body)
        .then(flashCardCategory => {
            return res.status(200).jsend.success(flashCardCategory);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Get all flash card category
router.get('/', (req, res) => {
    FlashCardCategoryController.getAllCategory()
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

module.exports = router;