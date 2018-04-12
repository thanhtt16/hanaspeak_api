'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    FlashCardCategoryController = require('../../controllers/FlashCardCategoryController'),
    CommonApi = require('./common_api');

// Middleware heck authen token router.use(check_authen); Create new Flash card
// category
router.post('/', (req, res) => {
    CommonApi.create(req, res, FlashCardCategoryController.createNewFlashCardCategory);
})

// Get Flash card category
router.get('/', (req, res) => {
    let categoryId = req.query['category_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    CommonApi.get(req, res, categoryId, limit, page, FlashCardCategoryController.getFlashCardCategories);
})

// Update Flash card category
router.put('/:id', (req, res) => {
    let categoryId = req.params['id'],
        flashCardCategoryData = req.body;
    CommonApi.update(req, res, categoryId, flashCardCategoryData, FlashCardCategoryController.updateFlashCardCategory);
})

// Delete Flash card category
router.delete('/:id', (req, res) => {
    let categoryId = req.params['id'];
    CommonApi.delete(req, res, categoryId, FlashCardCategoryController.deleteFlashCardCategory);
})

module.exports = router;