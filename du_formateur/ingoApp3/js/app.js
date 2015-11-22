var app = angular.module('ingoApp', ['ingoControllers', 'ngRoute', 'ngSanitize', 'angular.filter']);


/* Routes */
app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/ingos', {
            templateUrl: 'partials/ingoListView.html',
            controller: 'ingoListCtrl'
        })
        .when('/ingo/:id', {
            templateUrl: 'partials/ingoDetailView.html',
            controller: 'ingoDetailCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
    
}]);

/* Filters */
app.filter('website', function() {
    return function(input) {
        
        var output = '';
        
        if (input.indexOf('http://') != -1) { // si l'input contient http://
            output = '<a href="' + input + '" target="_blank">' + input + '</a>';
        } else {
            output = '<a href="http://' + input + '" target="_blank">' + input + '</a>';
        }
        
        return output; 
    }
});

app.filter('email', function() {
    return function(input) {
        
        var output = '';
        
        output = '<a href="mailto:' + input + '">' + input + '</a>';
        
        return output; 
    }
});