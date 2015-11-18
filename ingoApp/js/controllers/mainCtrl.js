// controller mainCtrl.js
// clang 17-11-2015

var ingoControllers = angular.module('ingoControllers', []);

ingoControllers.controller('ingoListCtrl',['$scope', '$http', function($scope, $http){

  $scope.committees = [
    'Social Cohesion and Global Challenges, Education and Culture',
    'Democracy',
    'Human Rights'
  ];

  $http.get('js/ngos.json')
    .success(function(data){
          //  voir site http://underscorejs.org
      // $scope.ingos = data; // avant de filter les Cles
      $scope.ingosInit = data;
      $scope.ingos = _.map(data, function(ngo)) {

      };


    })
    .error(function(){
      console.log ("pb lecture fichier js/ngos.json");
    });
}]);
