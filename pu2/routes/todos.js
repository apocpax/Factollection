var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);

router.get('/todos', function(req, res) {
    res.render('todos/index', {
        todos: todo.getAll()
    });
});



module.exports = router;