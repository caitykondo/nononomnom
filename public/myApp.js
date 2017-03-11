angular.module('myApp', ['ngRoute']);

var myApp = angular.module('myApp');

myApp
  .config(($routeProvider) => {

    $routeProvider
      .when('/', {
        templateUrl: 'views/default.html'
      });
  })
  .run(($rootScope) => {
    console.log('running');
  });