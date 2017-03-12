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
      })
      .when('/yes', {
        templateUrl: 'views/yes.html'
      })
      .when('/no', {
        templateUrl: 'views/no.html'
      })
      ;
  })
  .run(($rootScope, $location) => {
    console.log('running');
    $rootScope.$on("$routeChangeStart", function(event, next, current){
      if(next.templateUrl === '/yes'){
        $location.path('/yes.html');
      }
      if(next.templateUrl === '/no'){
        $location.path('/no.html');
      }
    });
  });