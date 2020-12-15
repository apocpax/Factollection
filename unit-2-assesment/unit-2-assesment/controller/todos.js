const todo = require('../models/todo');
var Todo = require('../models/todo');

module.exports = {
    index,


    create,

};

function create(req, res) {
    console.log('Hitting the create route!')
    console.log(req.body, "<---------------- req.body");

    Todo.create(req.body)
    res.redirect('/todos')
}

function index(req, res) {
    res.render('todos/index', {
        Todos: todo.getAll(),
        time: req.time
    });
}