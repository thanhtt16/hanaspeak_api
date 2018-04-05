'use strict'

var logger = require('../utils/logger');
var config = require('config');
var Book = require('./Schemas/Book');
var BookModel = function () {

}

// Create Book
BookModel.createBook = function (bookData) {
    return new Promise((resolve, reject) => {
        let bookName = bookData['name'];
        Book.findOrCreate({
            defaults: bookData,
            where: { name: bookName }
        }).spread((book, created) => {
            if (created)
                return resolve(book);
            else
                return reject({ code: 409, message: 'Book has existed' });
        }).catch(error => {
            logger.error('BookModel.createBook has error: ', error);
            return reject({ code: 500, message: 'Create new book has error' });
        })
    })
}

// Get books with paging
BookModel.getBooks = function (bookId, limit, page) {
    return new Promise((resolve, reject) => {
        let offset = page * limit;
        let whereObj = {};
        if (bookId)
            whereObj = { id: bookId };
        Book.findAndCountAll({
            where: whereObj,
            attributes:['id', 'name'],
            limit: limit,
            offset: offset,
            order: [['id', 'ASC']]
        }).then(results => {
            if (results['count'] == 0)
                return reject({ code: 404, message: "Not found any book" })
            return resolve(results);
        }).catch(error => {
            logger.error('BookModel.getBooks has error: ', error);
            return reject({ code: 500, message: 'Get books error' });
        })
    })
}

// Update book
BookModel.updateBook = function (bookId, bookData) {
    return new Promise((resolve, reject) => {
        Book.update(bookData, {
            where: { id: bookId }
        }).then(result => {
            if (result[0] == 1)
                return resolve('Update book success');
            else
                return reject({ code: 404, message: 'bookId is not existed' });
        }).catch(error => {
            logger.error('BookModel.updateBook has error: ', error);
            return reject({ code: 500, message: 'Update book error' });
        })
    })
}

// Delete book
BookModel.deleteBook = function (bookId) {
    return new Promise((resolve, reject) => {
        Book.destroy({
            where: { id: bookId }
        }).then(result => {
            if (result == 1)
                return resolve('Delete book success');
            else
                return reject({ code: 404, message: 'Not found book_id' })
        }).catch(error => {
            logger.error('BookModel.deleteBook has error: ', error);
            return reject({ code: 500, message: 'Delete book error' });
        })
    })
}
module.exports = BookModel;