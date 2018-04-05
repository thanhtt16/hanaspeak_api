'use strict'

var BookModel = require('../models/BookModel');

var BookController = function () {

}

BookController.createBook = function (bookData) {
    return new Promise((resolve, reject) => {
        BookModel.createBook(bookData)
            .then(book => {
                return resolve(book);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

BookController.getBooks = function (bookId, limit, page) {
    return new Promise((resolve, reject) => {
        try {
            limit = parseInt(limit);
            page = parseInt(page);
            if (!limit || limit < 0) limit = 10;
            if (!page || page < 0) page = 0;
        } catch (ex) {
            limit = 10;
            page = 0;
        }
        BookModel.getBooks(bookId, limit, page)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

BookController.updateBook = function (bookId, bookData) {
    return new Promise((resolve, reject) => {
        BookModel.updateBook(bookId, bookData)
            .then(results => {
                return resolve(results);
            })
            .catch(error => {
                return reject(error);
            })
    })
}

BookController.deleteBook = function (bookId) {
    return new Promise((resolve, reject) => {
        BookModel.deleteBook(bookId)
            .then(result => {
                return resolve(result);
            })
            .catch(error => {
                return reject(error);
            })
    })
}


module.exports = BookController;