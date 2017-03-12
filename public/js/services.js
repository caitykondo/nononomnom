myApp.service('CheckDiet',  ['FoodDataFactory' , function(FoodDataFactory){
  console.log('FoodDataFactory', FoodDataFactory);
  this.sanityCheck = function () {
    console.log('sanity check');
  };

  this.getData = function () {
    $http.get('food.json').success(function(response) {
         console.log(response.data);
      });
  };

  this.regina = function (foodQuery, dietQuery) {
    var foundFood = null;
    FoodDataFactory.content.foods.forEach((element) => {
      if (element.name === foodQuery){
        foundFood = element;
      }
    });

    for(i = 0; i < foundFood.diet.length; ++i){
      if (dietQuery === foundFood.diet[i]){
        console.log('yes');
        $location.path('/yes');
      }
    }
    console.log('no');
    $location.path('/no');
  };

}]);