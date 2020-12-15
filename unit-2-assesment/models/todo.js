const todos = [

];

module.exports = {
    create,

    getAll,

};

function create(todo) {
    todo.id = Date.now() % 1000000;
    todo.done = false;
    todos.push(todo);
}


function getAll() {
    return todos;
}