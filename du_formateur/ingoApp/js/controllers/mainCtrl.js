var ingoControllers = angular.module('ingoControllers', []);

ingoControllers.controller('ingoListCtrl', ['$scope', '$http', 
    function($scope, $http) {
    
        $http.get('js/ngos.json')
            .success(function(data) {
                
                $scope.ingos = data;
                
            })
            .error(function(data) {
                
            })
    
    
    }
])