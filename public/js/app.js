
angular.module('todoApp',[])
.controller('todoCoontroller', function($scope, $http) {
  //get all the todos and display by default
  $http({
    method: 'GET',
    url: '/api/todos'
  }).then(function successCallback(res) {
     console.log('res data', res.data);
    $scope.todos = res.data;
  }, function errorCallback(res) {
    console.error('Error retrieving todos');
  });
  $scope.title='Dummy Title';


  //addTodo function
  $scope.addTodo = function() {
    console.log($scope.todo);
    $http({
      method: 'POST',
      url: '/api/todos',
      data: $scope.todo
    }).then(function successCallback(res) {
      $scope.todo={}; //set todo.title="", todo.description=""
      $scope.todos.push(res.data);
      console.log(res.data);

    }, function errorCallback(res) {
      console.error('Error adding todos', res);

    });
  };

  //add toggleCompleted function
  $scope.toggleCompleted = function(todo) {
    // cannot refer to $scope.todo.completed as we can not refer to $scope.todo -> too many todo inside ng-repeat!
    // therefore have to pass in the current todo as input to refer to
    $http({
      method: 'PUT',
      url: '/api/todos/'+ todo._id,
      data: JSON.stringify({completed: todo.completed}) //server will get this info in req.body
    })
    .then(function successCallback(res) {
      console.log('complete updated!', res.data);
    }, function errorCallback(res) {
      console.error('Error toggle completed', res);
    });
    // save to database
    //add the crossline on css
  };

  $scope.deleteTodo = function(todo) {
    //send a delete request to server to remove this todo
    $http({
      method: 'DELETE',
      url: '/api/todos/' + todo._id,
    })
    .then(function successCallback(res) {
      //update the view
      $scope.todos = $scope.todos.filter(function(eachtodo) {
        return (eachtodo._id!==todo._id);
      });
    }, function errorCallback(res) {
      console.error('Error deleting todo', res);
    });
  };

});