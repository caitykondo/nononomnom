angular.module('myApp', ['ngRoute']);

var myApp = angular.module('myApp');

myApp
  .config(($routeProvider) => {

    $routeProvider
      // marketing site
      .when('/', {
        templateUrl: 'views/default.html'
      })
      // app
      .when('/app', {
        templateUrl: 'views/app.html',
        controller: 'AppController'
      });
  })
  .run(($rootScope, $location) => {
    console.log('running');
  });