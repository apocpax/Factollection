var express = require('express');
var router = express.Router();
var todosCtrl = require('../controller/todos');
const todo = require('../models/todo');

router.post('/', todosCtrl.create);
router.get('/', todosCtrl.index);
module.exports = router;

function getOne(id) {
    return todos.find(todo => todo.id === parseInt(id));
}

function getAll() {
    return todo;
}