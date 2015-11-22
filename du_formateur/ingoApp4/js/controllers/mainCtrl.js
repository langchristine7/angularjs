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













