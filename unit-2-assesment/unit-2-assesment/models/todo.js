const todos = [
    { id: 125223, todo: 'Feed Dogs', done: true },
    { id: 127904, todo: 'Learn Express', done: false },
    { id: 139608, todo: 'Buy Milk', done: false }
];

module.exports = {
    create,
};

function create(todo) {

    todo.id = Date.now() % 1000000;
    todo.done = false;
    todos.push(todo);
}