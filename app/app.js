angular.module('vegetate', [
  'ngRoute',
  'vegetate.pantry'
]).
config(function($routeProvider, $httpProvider) {
  $routeProvider.when( '/pantry',{ 
    templateUrl: 'pantry/pantry.html',
    controller: 'pantryController'
  }).otherwise({redirectTo: '/'});
}).run(function(){

});