'use strict';

var express = require('express'),
    router = express.Router(),
    check_authen = require('../../middlewares/authen'),
    GrammarController = require('../../controllers/GrammarController');

// Check authen token
// router.use(check_authen);
// Create new grammar
router.post('/', (req, res) => {
    GrammarController.createGrammar(req.body)
        .then(grammar => {
            return res.status(200).jsend.success(grammar);
        })
        .catch(error => {
            return res.status(error['code']).jsend.error({
                code: error['code'],
                message: error['message']
            })
        })
})

// Get list grammar
router.get('/', (req, res) => {
    let grammarId = req.query['grammar_id'],
        limit = req.query['limit'],
        page = req.query['page'];
    GrammarController.getGrammars(grammarId, limit, page)
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

// Update grammar by id
router.put('/:id', (req, res) => {
    let grammarId = req.params['id'],
        grammerData = req.body;
    GrammarController.updateGrammar(grammarId, grammerData)
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

// Delete grammar by id
router.delete('/:id', (req, res) => {
    let grammarId = req.params['id'];
    GrammarController.deleteGrammar(grammarId)
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