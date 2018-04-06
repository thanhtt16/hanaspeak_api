'use strict';

var express = require('express'),
    router = express.Router(),
    login_api = require('./login_api'),
    signup_api = require('../v1/signup_api'),
    user_api = require('./user_api'),
    role_api = require('./role_api'),
    flash_card_api = require('./flashcard_api'),
    flash_card_category = require('./flashcard_category_api'),
    book_api = require('./book_api'),
    lession_api = require('./lession_api'),
    conversation_api = require('./conversation_api'),
    vocabulary_api = require('./vocabulary_api'),
    expansion_api = require('./expansion_api'),
    grammar_api = require('./grammar_api');

// Import Route
router.use('/login', login_api);
router.use('/signup', signup_api);
router.use('/users', user_api);
router.use('/roles', role_api);
router.use('/flash_cards', flash_card_api);
router.use('/flash_card_category', flash_card_category);
router.use('/books', book_api);
router.use('/lessions', lession_api);
router.use('/conversations', conversation_api);
router.use('/vocabulary', vocabulary_api);
router.use('/expansions', expansion_api);
router.use('/grammars', grammar_api);

module.exports = router;
