// app.js
// clang 17-11-2015

/* routes */

var app = angular.module('ingoApp',
      ['ingoControllers', 'ngRoute', 'ngSanitize', 'angular.filter']);

app.config (['$routeProvider', function($routeProvider){
  $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html'
      })
      .when('/ingos', {
        templateUrl: 'partials/ingolistView.html',
        controller: 'ingoListCtrl'
      })
      .when('/ingos/:id', {
      templateUrl: 'partials/ingodetailView.html',
      controller: 'ingoDetailCtrl'
      })
      .when('/about', {
        templateUrl: 'partials/about.html'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

/* filtesr */
app.filter('website',function(){
 return function(input){  // closure
   var result="";
   if (input.indexOf('http://') == -1)
      result = 'http://' + input ;
   else result = input;
   return '<a href="' + result + '">'+input+'</a>';
 };

});
