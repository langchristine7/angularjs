var app = angular.module('ingoApp', ['ingoControllers', 'ngRoute', 'ngSanitize', 'angular.filter']);

app.config(['$routeProvider', function($routeProvider){
	// ce qu'il doit faire quand on se trouve dans telle ou telle url
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
   return '<a target="site" href="' + result + '">'+input+'</a>';
 };
});