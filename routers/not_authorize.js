'use strict';

var express = require('express'),
    path = require("path"),
    router = express.Router();

// Create flash card
router.get('/create-flashcard', (req, res) => {
    res.header('Content-Type', 'text/html');
    return res.render('create_flashcard')
});

// Create book
router.get('/create-book', (req, res) => {
    res.header('Content-Type', 'text/html');
    return res.render('create_book');
});

// Create lession
router.get('/create-lession', (req, res) => {
    res.header('Content-Type', 'text/html');
    return res.render('create_lession');
});

// Create conversation
router.get('/create-conversation', (req, res) => {
    res.header('Content-Type', 'text/html');
    return res.render('create_conversation');
});

// Create vocabulary
router.get('/create-vocabulary', (req, res) => {
    res.header('Content-Type', 'text/html');
    return res.render('create_vocabulary');
});

// Create expansion
router.get('/create-expansion', (req, res) => {
    res.header('Content-Type', 'text/html');
    return res.render('create_expansion');
});

// Create expansion
router.get('/create-grammar', (req, res) => {
    res.header('Content-Type', 'text/html');
    return res.render('create_grammar');
});


module.exports = router;
