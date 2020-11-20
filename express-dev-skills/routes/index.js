var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('index', { title: 'skills to pay the bills' });
});

module.exports = router;