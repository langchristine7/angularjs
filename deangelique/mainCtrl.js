var ingoControllers = angular.module('ingoControllers', []);

ingoControllers.controller('ingoListCtrl', ['$scope', '$http', function($scope, $http){
   $scope.committees = [
    'Social Cohesion and Global Challenges, Education and Culture',
    'Democracy',
    'Human Rights'
  ];
      
  $http.get('js/ngos.json')
    .success(function(data){
      $scope.ingos = data;
    })
    .error(function(data){
    });
}]);