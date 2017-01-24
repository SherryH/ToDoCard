
angular.module('todoApp',[])
.controller('todoCoontroller', function($scope, $http) {
  //get all the todos and display by default
  $http({
    method: 'GET',
    url: '/api/todos'
  }).then(function successCallback(res) {
    // console.log('res data', res.data);
    $scope.todos = res.data;
  }, function errorCallback(res) {
    console.error('Error retrieving todos');
  });
  $scope.title='Dummy Title';

  //addTodo function
  $scope.addTodo = function() {
    console.log($scope.todo.title);
    console.log($scope.todo.description);
    console.log($scope.todo);
    $http({
      method: 'POST',
      url: '/api/todos',
      data: $scope.todo
    }).then(function successCallback(res) {
      $scope.todo={}; //set todo.title="", todo.description=""
      $scope.todos.push(res.data);
      console.log(res);

    }, function errorCallback(res) {
      console.error('Error adding todos', res);

    });
  };
});