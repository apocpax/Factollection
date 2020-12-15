const Todo = require('../models/todo');

module.exports = {
    index,

    create,

};

function create(req, res) {
    console.log(req.body);
    Todo.create(req.body)
    res.redirect('todos/');
}


function index(req, res) {
    res.render('todos/', {
        todos: Todo.getAll()
    });
}