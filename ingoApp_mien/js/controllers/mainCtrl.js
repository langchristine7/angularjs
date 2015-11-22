var ingoControllers = angular.module('ingoControllers', []);
/*
celui du prof
ingoControllers.controller('ingoListCtrl', ['$scope', '$http', 'ingoFactory', 'ingoDataFactory', function($scope, $http, ingoFactory, ingoDataFactory){
*/
/*
ingoControllers.controller('ingoListCtrl', ['$scope', 'ingoFactory', 'ingoDataFactory', function($scope, ingoFactory, ingoDataFactory){

  $scope.aocs = ingoFactory.aocsTransformed('--');
  $scope.committees = ingoFactory.committees;
  $scope.geoReps = ingoFactory.geoReps;

  ingoDataFactory.getIngos().then(//promise
    function(data){//success
      $scope.ingos = data;
    },
    function(error){//failure
      console.log(error);
    }
  );

}]);


ingoControllers.controller('ingoDetailCtrl', ['$scope', '$routeParams', 'ingoDataFactory',
            function($scope, $routeParams, ingoDataFactory){
  var id = parseInt($routeParams.id);
  $scope.id = id;
  ingoDataFactory.getIngo(id).then( //promise
    function(data){ // success
      console.log(data);
    },
    function(error) {// failure
      console.log(error);
    }

  );
  //console.log (ingoDataFactory.getIngo(id));
}]);
*/

ingoControllers.controller('ingoListCtrl', ['$scope', '$http', 'ingoFactory', 'ingoDataFactory',
    function($scope, $http, ingoFactory, ingoDataFactory) {

        $scope.committees = ingoFactory.committees;
        $scope.georeps = ingoFactory.georeps;
        $scope.aocs = ingoFactory.aocsTransformed('----');


        if (ingoDataFactory.ingos === false) { // ingos jamais chargées dans le factory
            ingoDataFactory.getIngos().then(function(data) {
                $scope.ingos = data;
            })
        } else {
            $scope.ingos = ingoDataFactory.ingos;
        }

    }
]);

ingoControllers.controller('ingoDetailCtrl', ['$scope', '$routeParams', 'ingoDataFactory',
    function($scope, $routeParams, ingoDataFactory) {

        var id = parseInt($routeParams.id);

        if (ingoDataFactory.ingos === false) { // ingos jamais chargées dans le factory
            ingoDataFactory.getIngos().then(function(data) {
                $scope.ngo = ingoDataFactory.getIngo(id);
            });
        } else {
            $scope.ngo = ingoDataFactory.getIngo(id);
        }

    }
]);
