var path = require('path');
var Todo = require('./todo-model');
var handler = require('./request-handlers');



module.exports = function(app, db) {
  var rootPath = path.join(__dirname,'/..');
  var publicPath = path.join(rootPath, '/public');

//app.get('/api/todos');
app.post('/api/todos', handler.createTodos);

app.get('/api/todos', handler.getTodos);

app.get('/*', function(req, res) {
  res.status(200).sendFile(publicPath + '/index.html');
});

};