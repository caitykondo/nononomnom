myApp.controller('MainController',  [
  '$scope', '$http', 'FoodDataFactory',
  function ($scope, FoodDataFactory) {
    $scope.foodData = FoodDataFactory;
}]);