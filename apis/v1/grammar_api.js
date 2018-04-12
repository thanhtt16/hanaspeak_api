'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    GrammarController = require('../../controllers/GrammarController'),
    CommonApi = require('./common_api');

// Check authen token router.use(check_authen); Create new grammar
router.post('/', (req, res) => {
    CommonApi.create(req, res, GrammarController.createGrammar);
})

// Get list grammar
router.get('/', (req, res) => {
    let grammarId = req.query['grammar_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    CommonApi.get(req, res, grammarId, limit, page, GrammarController.getGrammars);
})

// Update grammar by id
router.put('/:id', (req, res) => {
    let grammarId = req.params['id'],
        grammerData = req.body;
    CommonApi.update(req, res, grammarId, grammerData, GrammarController.updateGrammar);
})

// Delete grammar by id
router.delete('/:id', (req, res) => {
    let grammarId = req.params['id'];
    CommonApi.delete(req, res, grammarId, GrammarController.deleteGrammar);
})

module.exports = router;