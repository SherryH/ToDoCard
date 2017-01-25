
angular.module('todoApp',['todo.services'])
.controller('todoCoontroller', function($scope, $http, todoFactory) {
  //get all the todos and display by default
  $scope.displayTodos = function() {
    todoFactory.displayTodos()
    .then(function(todos) {
      $scope.todos = todos;
    });
    $scope.title='Dummy Title';
  };

  //invoke displayTodos by default
  $scope.displayTodos();

  //addTodo function
  $scope.addTodo = function() {
    console.log($scope.todo);
    todoFactory.addTodo($scope.todo)
    .then(function(newTodo) {
      $scope.todo={}; //set todo.title="", todo.description=""
      $scope.todos.push(newTodo);
    });
  };

  //add toggleCompleted function
  $scope.toggleCompleted = function(todo) {
    // cannot refer to $scope.todo.completed as we can not refer to $scope.todo -> too many todo inside ng-repeat!
    // therefore have to pass in the current todo as input to refer to
    todoFactory.toggleCompleted(todo)
    .then(function(updatedTodo) {
      console.log('complete updated!', updatedTodo);
    });
  };

  $scope.deleteTodo = function(todo) {
    //send a delete request to server to remove this todo
    todoFactory.deleteTodo(todo)
    .then(function() {
      //after the deletion, update the view
      $scope.todos = $scope.todos.filter(function(eachtodo) {
        return (eachtodo._id!==todo._id);
      });
    })
    .catch(function(err) {
      console.error('Error deleting todo', err);
    });
  };

});