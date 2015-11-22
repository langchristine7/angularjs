var ingoControllers = angular.module('ingoControllers', []);

ingoControllers.controller('ingoListCtrl', ['$scope', '$http', 'ingoFactory', 'ingoDataFactory',
    function($scope, $http, ingoFactory, ingoDataFactory) {
        
        $scope.committees = ingoFactory.committees;
        $scope.georeps = ingoFactory.georeps;
        //$scope.aocs = ingoFactory.aocs;
        $scope.aocs = ingoFactory.aocsTransformed('----');
        
        //console.log(ingoDataFactory.getIngos());
        
        ingoDataFactory.getIngos().then( // promise
            function(data) { // success
                
                $scope.ingos = data;
                 
            },
            function(error) { // failure
                
            }
        )
                   
    }
]);


ingoControllers.controller('ingoDetailCtrl', ['$scope', '$routeParams', 'ingoDataFactory',
    function($scope, $routeParams, ingoDataFactory) {
        
        
        var id = parseInt($routeParams.id);
        $scope.id = id;
        
        ingoDataFactory.getIngo(id).then( // promise
            function(data) { // success
                
                $scope.ngo = data;
                
            },
            function(error) { // failure
                console.log(error);
            }
            
        )
        
    }
])













