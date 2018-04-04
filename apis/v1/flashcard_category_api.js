'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    FlashCardCategoryController = require('../../controllers/FlashCardCategoryController');

// Middleware heck authen token router.use(check_authen); Create new Flash card
// category
router.post('/', (req, res) => {
    FlashCardCategoryController
        .createNewFlashCardCategory(req.body)
        .then(flashCardCategory => {
            return res
                .status(200)
                .jsend
                .success(flashCardCategory);
        })
        .catch(error => {
            return res
                .status(error['code'])
                .jsend
                .error({code: error['code'], message: error['message']})
        })
})

// Get Flash card category
router.get('/', (req, res) => {
    let categoryId = req.query['category_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    FlashCardCategoryController
        .getFlashCardCategories(categoryId, limit, page)
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

// Update Flash card category
router.put('/:id', (req, res) => {
    let categoryId = req.params['id'],
        flashCardCategoryData = req.body;
    FlashCardCategoryController
        .updateFlashCardCategory(categoryId, flashCardCategoryData)
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

// Delete Flash card category
router.delete('/:id', (req, res) => {
    let categoryId = req.params['id'];
    FlashCardCategoryController
        .deleteFlashCardCategory(categoryId)
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