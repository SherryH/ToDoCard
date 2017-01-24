//Define Schema and models for todos
//the CRUD operation in request-handlers will handle the data
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  title: {type: String, default: 'New Todo'},
  description: String,
  completed: {type: Boolean, default: false}
});

var Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;