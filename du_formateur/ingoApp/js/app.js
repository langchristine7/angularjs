var app = angular.module('ingoApp', ['ingoControllers', 'ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/ingos', {
            templateUrl: 'partials/ingolistView.html',
            controller: 'ingoListCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
    
}]);