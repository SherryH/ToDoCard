var path = require('path');
var Todo = require('./todo-model');
var mongoose = require('mongoose');



module.exports = function(app, db) {
  var rootPath = path.join(__dirname,'/..');
  var publicPath = path.join(rootPath, '/public');

//app.get('/api/todos');
app.post('/api/todos', function(req, res) {
  //create a todo entry in the db
  console.log('received request');
  //db.once('open', function() { //comment out this line as otherwise connection will not open.....
  console.log('db opened');
    Todo.create({
      title: req.body.title,
      description: req.body.description,
      completed: false
    })
    .then(function(todo) {
      res.status(201).send(todo);
    })
    .catch(function(err) {
      console.error('Error creating todos', err);
    });
  //});
});

app.get('/*', function(req, res) {
  res.status(200).sendFile(publicPath + '/index.html');
});

};