myApp.service('ReginaService', function () {

  this.foods = [
    {
      "name": "pork",
      "diet": ["low-carb", "keto", "high-protein", "paleo"]
    },
    {
      "name": "bacon",
      "diet": ["low-carb", "keto", "high-protein"]
    },
    {
      "name": "sausage",
      "diet": ["low-carb", "keto", "high-protein"]
    }
  ];

  this.regina = function (foodQuery, dietQuery) {
    console.log(foodQuery, dietQuery);
    var foundFood = null;

    this.foods.forEach((element) => {
      if (element.name === foodQuery){
        foundFood = element;
      }
    });

    for(i = 0; i < foundFood.diet.length; ++i){
      if (dietQuery === foundFood.diet[i]){
        return "yes";
      }
    }
    return "no";
  };

});