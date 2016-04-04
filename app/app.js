angular.module('vegetate', [
  'ngRoute',
  'login',
  'pantry',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when( '/',{ 
    // templateUrl: 'app/auth/signin.html',
    // controller: 'AuthController'
  }).otherwise({redirectTo: '/'});
}]);