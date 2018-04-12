'use strict'

var BookModel = require('../models/BookModel');
var CommonController = require('./CommonController');
var BookController = function () {}

BookController.createBook = function (bookData) {
    return BookModel.createBook(bookData)
}

BookController.getBooks = function (bookId, limit, page) {
    try {
        limit = parseInt(limit);
        page = parseInt(page);
        if (!limit || limit < 0) 
            limit = 10;
        if (!page || page < 0) 
            page = 0;
        }
    catch (ex) {
        limit = 10;
        page = 0;
    }
    return BookModel.getBooks(bookId, limit, page);
}

BookController.updateBook = function (bookId, bookData) {
    return BookModel.updateBook(bookId, bookData);
}

BookController.deleteBook = function (bookId) {
    return BookModel.deleteBook(bookId);
}

module.exports = BookController;