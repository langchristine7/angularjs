var ingoControllers = angular.module('ingoControllers', []);

ingoControllers.controller('ingoListCtrl', ['$scope', 'ingoFactory', 'ingoDataFactory',
  function($scope, ingoFactory, ingoDataFactory){

  $scope.aocs = ingoFactory.aocs;
  $scope.committees = ingoFactory.committees;
  $scope.geoReps = ingoFactory.geoReps;

  ingoDataFactory.getIngos().then ( // promise
    function(data) { //success
      $scope.ingos = data ;
    }
  )



}]);
