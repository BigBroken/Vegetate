angular.module('vegetate.pantry', [])
.controller('pantryController', function($scope, $http) {
  $scope.username='';
  $scope.produces=[];
  
//add produce 


  $http({
  method: 'GET',
  url: '/db/pantry'
  }).then(function(res) {
    $scope.produces = res.data;
  });

});