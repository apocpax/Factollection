var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');
const todo = require('../models/todo');

router.get('/', todosCtrl.index);

router.post('/', todosCtrl.create);


module.exports = router;