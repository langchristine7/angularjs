// controller mainCtrl.js
// clang 17-11-2015

var ingoControllers = angular.module('ingoControllers', []);

ingoControllers.controller('ingoListCtrl',['$scope', $http, function($scope, $http){
  $http.get('ngos.json')
    .success(function(data){
      $scope.ingos = data;
        //console.log(data);
    })
    .error(function(){

    })
}]);
