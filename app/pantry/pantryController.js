angular.module('vegetate.pantry', [])
.controller('pantryController', function($scope, $http) {
  $scope.username='';
  $scope.produces=[];
  $scope.produceName='';
  $scope.pantry;
//add produce 

//calculates freshness based of database values of date and shelflife
//In its current form date takes the form of "yyyy-mm-ddThh:mm:ZZZ.340Z"


  $scope.pantryGet = function(){
    $http({
    method: 'GET',
    url: '/db/pantry'
    }).then(function(res) {
      $scope.produces = res;
       console.log($scope.produces);
    });
  };
$scope.pantryGet();

  $scope.pantryPost = function(){
    // console.log({name: $scope.produce});
    $http({
    method: 'Post',
    url: '/db/pantry',
    data: {'name': $scope.pantry}
    }).then(function(res) {
      $scope.pantryGet();
    });

  };
  $scope.pantryRemove = function(id){
    $http({
      method: 'Post',
      url: '/db/remove',
      data: {'_id': id}
    }).then(function(res){
      $scope.pantryGet();
    });
  };
});