'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    BookController = require('../../controllers/BookController'),
    CommonApi = require('./common_api');

// Check authen token router.use(check_authen); Create new book
router.post('/', (req, res) => {
    CommonApi.create(req, res, BookController.createBook);
})

// Get list book
router.get('/', (req, res) => {
    let bookId = req.query['book_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    CommonApi.get(req, res, bookId, limit, page, BookController.getBooks);
})

// Update book by id
router.put('/:id', (req, res) => {
    let bookId = req.params['id'],
        bookData = req.body;
    CommonApi.update(req, res, bookId, bookData, BookController.updateBook);
})

// Delete book by id
router.delete('/:id', (req, res) => {
    let bookId = req.params['id'];
    CommonApi.delete(req, res, bookId, BookController.deleteBook);
})

module.exports = router;