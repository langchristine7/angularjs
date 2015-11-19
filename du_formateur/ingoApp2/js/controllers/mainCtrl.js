var ingoControllers = angular.module('ingoControllers', []);

ingoControllers.controller('ingoListCtrl', ['$scope', '$http', 'ingoFactory',
    function($scope, $http, ingoFactory) {
            
        $http.get('js/ngos.json')
            .success(function(data) {
                                
                $scope.ingosInit = data;
                
                $scope.ingos = _.map(data, function(ingo) {
                    return {
                        nameEn: ingo["Name (english)"],
                        acronymEn: ingo["Acronym (english)"],
                        nameFr: ingo["Name (french)"],
                        acronymFr: ingo["Acronym (French)"],
                        street: ingo["Street"],
                        postcode: ingo["Postcode"],
                        town: ingo["Town"],
                        country: ingo["Country"],
                        tel: ingo["Tel"],
                        fax: ingo["Fax"],
                        website: ingo["Website"],
                        email: ingo["Email"],
                        
                        aocs: ingo["Areas of competence"],
                        committees: ingo["Committes"],
                        geoReps: ingo["Geographical representation"]  
                    }
                });
                
            })
            .error(function(data, status) {
                alert('Impossible de charger les données (erreur ' + status + ')');
            })
            
    }
])