var Todo = require('./todo-model');

exports.getTodos = function(req, res) {
  Todo.find({})
  .then(function(todos) {
    res.status(200).send(todos);
  })
  .catch(function(err) {
      console.error('Error retrieving todos', err);
  });
};

exports.createTodos = function(req, res) {
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
};