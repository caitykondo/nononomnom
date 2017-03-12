myApp.controller('AppController', [
  '$scope', 'CheckDiet',
  function ($scope, CheckDiet) {
    $scope.CheckDiet = CheckDiet;
    $scope.dietList = ["low carb", "paleo", "vegan", "vegetarian", "keto"];
    $scope.foodDataIpsum = [
      {name: "pork", diet: ["low carb", "paleo"] },
      {name: "sausage", diet: ["low carb", "paleo"] },
      {name: "butter", diet: ["low carb", "paleo", "a carb"] }
    ];
}]);