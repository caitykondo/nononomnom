myApp.controller('AppController', [
  '$scope', 'CheckDiet', 'FoodDataFactory',
  function ($scope, CheckDiet, FoodDataFactory) {
    console.log(FoodDataFactory);
    $scope.foodData = FoodDataFactory;
    $scope.CheckDiet = CheckDiet;
    $scope.dietList = ["low carb", "paleo", "vegan", "vegetarian", "keto"];
    $scope.foodDataIpsum = [
      {name: "pork", diet: ["low carb", "paleo"] },
      {name: "sausage", diet: ["low carb", "paleo"] },
      {name: "butter", diet: ["low carb", "paleo", "a carb"] }
    ];
}]);