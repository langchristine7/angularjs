var app = angular.module('ingoApp', ['ingoControllers', 'ngRoute', 'ngSanitize', 'angular.filter']);

app.config(['$routeProvider', function($routeProvider){
        
	// ce qu'il doit faire quand on se trouve dans telle ou telle url
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html'
		})
		.when('/ingos', {
			templateUrl: 'partials/ingoListView.html',
			controller: 'ingoListCtrl'
		})
		.when('/ingos/:id', {
			templateUrl: 'partials/ingoDetailView.html',
			controller: 'ingoDetailCtrl'
		})
		.when('/ingoBy/:id', {
			templateUrl: 'partials/ingoByView.html',
			controller: 'ingoByCtrl'
		})
		.when('/ingoBy/:type/:recherche', {
			templateUrl: 'partials/ingoListView.html',
			controller: 'ingoListCtrl'
		})
		.when('/sign/:io', {
			templateUrl: 'partials/ingoSignInView.html',
			controller: 'ingoSignInCtrl'
		})
		.when('/test', {
			templateUrl: 'partials/testView.html',
			controller: 'testCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
		
}]);

/* filters */
app.filter('website',function(){
  
 return function(input){  // closure
   var result="";
   if (input.indexOf('http://') == -1)
      result = 'http://' + input ;
   else result = input;
   return '<a target="site" href="' + result + '">'+input+'</a>';
 };
 
});

/* directives */
/* 
correspond au my-dir du view
attention à la caste : ici il y a une majuscule ! 
*/
app.directive('myDir', function(){
  
  return {
    restrict: 'A', // restrint le domaine de création de directive  à un element (E) ou un attribut  (A) ou aux deux (EA)
    //template: '<span>ma 1ere directive {{ message }} </span>'
    templateUrl: 'partials/template.html',
    replace: true, // remplace la directive par ce qu'il y a avant (par defaut false -> ajoute)
    scope: {
      player: '='
    },
    link: function($scope, element, attrs){ 
      // attrx récupère ce qu'il y a dans l'attribut de la balise (ex : joueur dans player=)
      // element permet de faire du jquery dans la balise -> https://docs.angularjs.org/api/ng/function/angular.element
      element.children('button').bind('click', function(){
        console.log(attrs);
      });
      var valeur = element.find('p').text();
      element.find('p').replaceWith('<input type="text" value="' + valeur + '">');
    }
  };
  
});

















