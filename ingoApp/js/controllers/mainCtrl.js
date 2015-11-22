var ingoControllers = angular.module('ingoControllers', []);


ingoControllers.controller('menuCtrl', ['$rootScope', 'ingoInterface', function($rootScope, ingoInterface){
  
  $rootScope.isSessionOpen = false;
  $rootScope.menu = ingoInterface.menu;
  
}]);

ingoControllers.controller('ingoListCtrl', ['$scope', 'ingoFactory', 'ingoDataFactory', '$routeParams', function($scope, ingoFactory, ingoDataFactory, $routeParams){
  
  $scope.choix = true;
  if($routeParams.type !== undefined){
    $scope.choix = false;
    var type = $routeParams.type;
    $scope.lien = type;
    var recherche = $routeParams.recherche;
    $scope.titre = recherche;
    //coche la case faisant apparaitre les filtres
    $scope.chkFilters = true;
    switch(type){
      case 'country':
        $scope.selectGeoRep = recherche;
        break;
      case 'committee':
        $scope.selectCommittee = recherche;
        break;
      case 'aoc':
        $scope.selectAoc = recherche;
        break;
    }
  }
  
  
  $scope.aocs = ingoFactory.aocsTransformed('--');
  $scope.committees = ingoFactory.committees;
  $scope.geoReps = ingoFactory.geoReps;
  
  if(!ingoDataFactory.ingos){
    ingoDataFactory.getIngos().then(//promise
      function(data){//success
        $scope.ingos = data;
      }
    );
  }else{
        $scope.ingos = ingoDataFactory.ingos;
  }
  
}]);

ingoControllers.controller('ingoDetailCtrl', ['$scope', '$routeParams', 'ingoDataFactory', function($scope, $routeParams, ingoDataFactory){
  
  var id = parseInt($routeParams.id);
  $scope.id = id;
        
  if (!ingoDataFactory.ingos) { // ingos jamais chargées dans le factory
      ingoDataFactory.getIngos().then(
        function(data) {
          $scope.ngo = ingoDataFactory.getIngo(id);
      }
    );
  } else {
      $scope.ngo = ingoDataFactory.getIngo(id);
  }

}]);

ingoControllers.controller('ingoByCtrl', ['$scope', '$routeParams', 'ingoFactory', function($scope, $routeParams, ingoFactory){
  
  var id = $routeParams.id;
  $scope.id = id;
  switch(id){
    case 'country':
      $scope.titre = "Country";
      // pour _.each voir underscore.js qui permet de faire plein de chose
      var row = '<div class="row">';
      _.each(ingoFactory.geoReps, function(geoRep, i){
        if(i % 4 === 0){
          row += '</div><div class="row">';
        }
        row += '<div class="three columns"><h2><a href="#/ingoBy/country/' + geoRep + '">' + geoRep + '</a></h2></div>';
        i++;
      });
      row += '</div>';
      $scope.row = row;
      break;
    case 'committee':
      $scope.titre = "Committee";
      // pour _.each voir underscore.js qui permet de faire plein de chose
      var row = '<div class="row">';
      _.each(ingoFactory.committees, function(committee, i){
        if(i % 3 === 0){
          row += '</div><div class="row">';
        }
        row += '<div class="four columns"><h2><a href="#/ingoBy/committee/' + committee + '">' + committee + '</a></h2></div>';
        i++;
      });
      row += '</div>';
      $scope.row = row;
      break;
    case 'aoc':
      $scope.titre = "area of competence";
      // pour _.each voir underscore.js qui permet de faire plein de chose
      var row = '<div class="row">';
      var tabAoc = [];
      _.each(ingoFactory.aocs, function(aocs, i){
        var objet = _.keys(aocs).toString();  
        if(i % 2 === 0){
          row += '</div><div class="row">';
        }
        row += '<div class="six columns"><h2><a href="#/ingoBy/aoc/' + objet + '">' + objet + '</a>';
        
        
        _.each(aocs[objet], function(i){
            row += '<br/><a href="#/ingoBy/aoc/' + i + '">   .   ' + i + '</a>';
          });
        row += '</h2></div>';
        i++;
      });
      row += '</div>';
      $scope.row = row;
      break;
  }
  
}]);

ingoControllers.controller('ingoSignInCtrl', ['$scope', '$routeParams', '$http', '$rootScope', function($scope, $routeParams, $http, $rootScope){
  
  console.log("msg : " + $scope.msg);
  // si son scope ne le trouve pas il le cherche dans le root
  console.log("msg : " + $scope.msg2);
  console.log("msg : " + $rootScope.msg2);
  
  $scope.submit = function(){
  var server = 'http://test2-opusidea.c9.io/ingo/sign-in';
  var user = angular.toJson($scope.user);
  $http.post(server, user)
    .success(function(data){
      console.log(data);
      $scope.message = "Identification réussie";
      $rootScope.isSessionOpen = true;
      $rootScope.menu.signIn.text = 'SIGN OUT';
      $rootScope.menu.signIn.url = 'sign/out';
    })
    .error(function(status){
      $scope.message = "Problème " + status;
      
    });
  };
  
}]);

ingoControllers.controller('testCtrl', ['$scope', '$rootScope', '$interval', function($scope, $rootScope, $interval){
  $scope.msg = 'bravo';
  $rootScope.msg2 = 'fantastique';
  console.log("msg : " + $scope.msg);
  console.log("msg : " + $rootScope.msg2);
  
  $scope.message = "Angular";
  $scope.joueurs = [
      {
        name: 'Lionel Messi',
        numero: 10,
        image:''
      },
      {
        name: 'Hugo Lloris',
        numero: 1,
        image:''
      },
      {
        name: 'Cristiano Ronaldo',
        numero: 7,
        image:''
      }
    ];
  
  images = ['http://www.ac-grenoble.fr/ien.vienne1-2/spip/IMG/bmp_Image004.bmp',
    'http://www.online-image-editor.com//styles/2014/images/example_image.png',
    'https://www.wonderplugin.com/wp-content/plugins/wonderplugin-lightbox/images/demo-image0.jpg'];
  var i = 0;
  $scope.source = images[i];
  $interval(function() {
    if (i == 2) { i = 0; }else{ i++; }
    $scope.source = images[i];
  }, 3000);
  
}]);