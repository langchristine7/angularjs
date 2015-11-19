// controller mainCtrl.js
// clang 17-11-2015

var ingoControllers = angular.module('ingoControllers', []);

ingoControllers.controller('ingoListCtrl',['$scope', '$http', 'ingoFactory',
    function($scope, $http, ingoFactory){
$scope.committees = ingoFactory.committees;
$scope.aocs = ingoFactory.aocs;
$scope.geoReps = ingoFactory.geoReps;

  $http.get('js/ngos.json')
    .success(function(data){
          //  voir site http://underscorejs.org
      // $scope.ingos = data; // avant de filter les Cles

      $scope.ingosInit = data;
      $scope.ingos = _.map(data, function(ingo) {
          return {
            nameEn:ingo["Name (english)"],
            acronymEn:ingo["Acronym (english)"],
            nameFr:ingo["Name (french)"],
            acronymFr:ingo["Acronym (French)"],
            street:ingo["Street"],
            postcode:ingo["Postcode"],
            town:ingo["Town"],
            country:ingo["Country"],
            tel:ingo["Tel"],
            fax:ingo["Fax"],
            website:ingo["Website"],
            email:ingo["Email"],
            funding:ingo["Funding"],
            nature:ingo["Nature of organisation"],
            presidentFirstName:ingo["President First Name"],
            presidentLastName:ingo["President Last Name"],
            presidentAddress:ingo["President Address"],
            sgFirstName:ingo["SG First Name"],
            sgLastName:ingo["SG Last Name"],
            sgAddress:ingo["SG Address"],
            yearOfFoundation:ingo["Year of foundation"],
            staff:ingo["Staff"],
            numberOfMembers:ingo["Number of members"],
            workingLanguages:ingo["Working languages"],
            officialLanguages:ingo["Official languages"],
            committees:ingo["Committes"],
            geoReps:ingo["Geographical representation"],
            aocs:ingo["Areas of competence"],
            yearStatus:ingo["yearStatus"]
          };
      });
    })
    .error(function(data, status){
      console.log ("pb lecture fichier js/ngos.json" + status);
    });
}]);
