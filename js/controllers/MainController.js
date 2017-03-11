myApp.controller('MainController',  [
  '$scope', '$http', 'FoodDataFactory',
  function ($scope, $http, FoodDataFactory) {
    $scope.foodData = FoodDataFactory;
}]);