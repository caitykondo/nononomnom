myApp.service('CheckDiet', function(){
  this.sanityCheck = function () {
    console.log('sanity check');
  };

  this.getData = function () {
    $http.get('food.json').success(function(response) {
         console.log(response.data);
      });
  };
});