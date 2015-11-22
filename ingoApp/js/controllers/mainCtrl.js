var ingoControllers = angular.module('ingoControllers', []);

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

ingoControllers.controller('ingoSignInCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
      $scope.submit = function(){
          //console.log($scope.user.email);
          var server = 'http://test2-opusidea.c9.io/ingo/sign-in';
          var user = angular.toJson($scope.user);
          $http.post(server, user)
          .success(function(data) {
            $scope.message = 'Identification réussie';
          })
          .error(function(status){
            $scope.message = 'Problème';
          });

  };
}
]);
