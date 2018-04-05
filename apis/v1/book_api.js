'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    BookController = require('../../controllers/BookController');

// Check authen token
// router.use(check_authen);
// Create new book
router.post('/', (req, res) => {
    BookController.createBook(req.body)
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

// Get list book
router.get('/', (req, res) => {
    let bookId = req.query['book_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    BookController.getBooks(bookId, limit, page)
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

// Update book by id
router.put('/:id', (req, res) => {
    let bookId = req.params['id'],
        bookData = req.body;
    BookController.updateBook(bookId, bookData)
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

// Delete book by id
router.delete('/:id', (req, res) => {
    let bookId = req.params['id'];
    BookController.deleteBook(bookId)
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