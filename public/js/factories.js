myApp.factory('FoodDataFactory', [
  '$http',
  ($http) => {
    var obj = {content:null};

    $http.get('food.json').success(function(data) {
        obj.content = data;
    });

    return obj;
    // return 'food data';
}]);