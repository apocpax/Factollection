 // Require modules
 const express = require('express');
 const path = require('path');

 const todoDb = require('./data/todo-db');

 // Create the Express app
 const app = express();

 // Configure the app (app.set)
 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));

 // Mount middleware (app.use)


 // Mount routes
 app.get('/todos', function(req, res) {
     res.render('todos/index', {
         todos: todoDb.getAll()
     });
 })
 app.get('/', function(req, res) {
     res.redirect('/home');
 });

 app.get('/home', function(req, res) {
     res.render('home');
 });

 app.post('/cars', function(req, res) {
     res.send('Thanks for the new car!');
 });
 // Tell the app to listen on port 3000
 app.listen(3000, function() {
     console.log('Listening on port 3000');
 });

 // Define a "root" route directly on app
 // Tomorrow, we'll use best practice routing
 app.get('/', function(req, res) {
     res.send('<h1>Hello World!</h1>');
 });

 // Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(3000, function() {
     console.log('Listening on port 3000');
 });