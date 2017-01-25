angular.module('todo.services',[])
.factory('todoFactory', function($http) {
  var deleteTodo = function(todo) {
    //moving method to Factory, need to return $http
    return $http({
      method: 'DELETE',
      url: '/api/todos/' + todo._id,
    })
    .then(function successCallback(res) {
      //nothing gets returned in response
    }, function errorCallback(res) {
      console.error('Error deleting todo', res);
    });
  };

  var toggleCompleted = function(todo) {
    return $http({
      method: 'PUT',
      url: '/api/todos/'+ todo._id,
      data: JSON.stringify({completed: todo.completed}) //server will get this info in req.body
    })
    .then(function successCallback(res) {
      return res.data;
    }, function errorCallback(res) {
      console.error('Error toggle completed', res);
    });
  };

  var addTodo = function(data) {
    return $http({
      method: 'POST',
      url: '/api/todos',
      data: data
    }).then(function successCallback(res) {
      return res.data;
    }, function errorCallback(res) {
      console.error('Error adding todos', res);
    });
  };

  var displayTodos = function() {
    return $http({
      method: 'GET',
      url: '/api/todos'
    }).then(function successCallback(res) {
       console.log('res data', res.data);
      return res.data;
    }, function errorCallback(res) {
      console.error('Error retrieving todos');
    });
  };

  return {
    deleteTodo: deleteTodo,
    toggleCompleted: toggleCompleted,
    addTodo: addTodo,
    displayTodos: displayTodos
  };
});