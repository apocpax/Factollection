var express = require('express');
var router = express.Router();


var todosCtrl = require('../controller/todos');
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express To-Do' });
});
router.post('/', todosCtrl.create);


module.exports = router;