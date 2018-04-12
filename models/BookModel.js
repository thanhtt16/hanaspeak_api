'use strict'

var Book = require('./Schemas/Book');
var CommonModel = require('./CommonModel');
var commonModel = new CommonModel(Book);
var BookModel = function () {}

// Create Book
BookModel.createBook = function (bookData) {
    return commonModel.create(bookData, ['name']);
}

// Get books with paging
BookModel.getBooks = function (bookId, limit, page) {
    let attributes = [
            'id', 'name'
        ],
        order = [
            ['id', 'ASC']
        ];
    return commonModel.get(bookId, limit, page, attributes, order);
}

// Update book
BookModel.updateBook = function (bookId, bookData) {
    return commonModel.update(bookId, bookData);
}

// Delete book
BookModel.deleteBook = function (bookId) {
    return commonModel.delete(bookId);
}
module.exports = BookModel;