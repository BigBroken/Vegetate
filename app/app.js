angular.module('vegetate', [
  'ngRoute',
  'login',
  'pantry',
]).
config( function($routeProvider, $httpProvider) {
  $routeProvider.when( '/',{ 
    // templateUrl: 'app/auth/signin.html',
    // controller: 'AuthController'
  }).otherwise({redirectTo: '/'});
}).run(function($scope){

});