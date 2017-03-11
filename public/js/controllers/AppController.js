myApp.controller('AppController', [
  '$scope', 'CheckDiet',
  function ($scope, CheckDiet) {
    $scope.CheckDiet = CheckDiet;
}]);