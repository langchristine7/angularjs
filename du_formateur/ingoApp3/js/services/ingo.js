app.factory('ingoFactory', function() {
    
    
    var committees = [
        'Democracy, Social Cohesion and Global Challenges', 
        'Education and Culture',
        'Human Rights'
    ];
    
    
    var georeps = [
        'Albania',
        'Andorra',
        'Armenia',
        'Austria',
        'Azerbaijan',
        'Belarus',
        'Bosnia and Herzegovina',
        'Belgium',
        'Bulgaria',
        'Croatia',
        'Canada',
        'Cyprus',
        'Czech Republic',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Georgia',
        'Germany',
        'Greece',
        'Hungary',
        'Iceland',
        'Israel',
        'Italy',
        'Latvia',
        'Liechtenstein',
        'Lithuania',
        'Luxembourg',
        'Malta',
        'Marrocco',
        'Moldova',
        'Monaco',
        'Montenegro',
        'Netherlands',
        'Norway',
        'Poland',
        'Portugal',
        'Romania',
        'Russian Federation',
        'San Marino',
        'Serbia',
        'Slovakia',
        'Slovania',
        'South Africa',
        'Spain',
        'Sweden',
        'Switzerland',
        'the Former Yusgoslav Republic of Macedonia',
        'Turkey',
        'Ukraine',
        'United Kingdom',
        'USA'
    ];

    
    var aocs = [
            {
                "Democracy": [
                    'Elections',
                    'Equal democracy',
                    'local and regional democracy',
                    'Promotion of democratic values and education for democratic citizenship',
                    'Strengthening civil society'
                ]
            },
            {
                "Education and Culture": [
                    'Art, music, theatre',
                    'Cultural Diversity',
                    'Cultural policies',
                    'Education for Democratic Citizenship',
                    'Heritage',
                    'Higher Educational',
                    'Intercultural Dialogue',
                    'Languages',
                    'Religion'
                ] 
            },
            {
                "Environment and sustainable development": [
                    'Conservation / protection of animals',
                    'Countryside',
                    'Environment protection',
                    'Land development',
                    'Natural and technological disasters',
                    'Rural areas',
                    'Sustainable tourism',
                    'Urban areas'
                ]
            },
            {
                "Health": [
                    'Dental health',
                    'Health and Ethics',
                    'Pharmacopoeia',
                    'Prevention',
                    'Public Health',
                    'Scientific research'
                ]
            },
            {
                "Human rights": [
                    'Children\'s rights',
                    'Economics and social rights',
                    'Fight against racism',
                    'Gender equality',
                    'Legal protection',
                    'Prevention of Torture',
                    'Promotion and defence of Human Rights',
                    'Rights of Minirities',
                    'Trafficking in human beings'
                ]
            },
            {
                "International Co-operation": [
                    'Conflict meditation',
                    'European integration',
                    'Humanitarian aid',
                    'North-South Dialogue',
                    'Promotion of Peace'
                ]
            },
            {
                "Media and Communication": [
                    'Access to information',
                    'Freedom of expression',
                    'Media and conflicts',
                    'Media and minorities',
                    'Media and violence',
                    'Media assistance',
                    'Media pluralism',
                    'Security and access to internet'
                ]
            },
            {
                "Other":[]
            },
            {
                "Rule of Law": [
                    'Fight against corruption',
                    'Fight agains Terrorism',
                    'Penal Law',
                    'Private Law',
                    'Security',
                    'Strengthening of international public law'
                ]
            },
            {
                "Social Cohesion": [
                    'Children',
                    'Disabled persons',
                    'Family',
                    'Fight against poverty and social exclusion',
                    'Fight against violence',
                    'Intercommunity relations and integration',
                    'Migration',
                    'Refugees',
                    'Roma and Travellers',
                    'Students',
                    'The elderly'
                ]
            },
            {
                "Sport": [
                    'Dopping',
                    'Spectator violence'
                ]
            },
            {
                "Youth": [
                    'Youth participation',
                    'Youth policy'
                ]
            }
        ];
        
    
        var factory = {
            committees: committees,
            georeps: georeps,
            aocs: aocs,
            aocsTransformed: function(indentChar) {
                var t = [];
                
                _.each(factory.aocs, function(e) {
                    var k = _.keys(e).toString();
                    //t.push(k);
                    t.push({
                        title: k,
                        val: k,
                        class: 'level1'
                    })
                    
                    _.each(e[k], function(i) {
                        //t.push(indentChar + i);
                        t.push({
                            title: indentChar + i,
                            val: i,
                            class: 'level2'
                        })
                    })
                    
                });
                
                return t;
            }
        }
        
        return factory;

});


app.factory('ingoDataFactory', ['$http','$q', function($http, $q){
    
    var factory = {
        ingos: false,
        getIngos: function() {
            var defer = $q.defer();
            
            if (!factory.ingos) {
                
                $http.get('js/ngos.json')
                    .success(function(data) {
                        
                        factory.ingos = _.map(data, function(ingo, i) {
                            i = i | 0;
                            i++;
                            return {
                                id: i,
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
                                
                                nbMembers: ingo["Number of members"],
                                staff: ingo["Staff"],
                        
                                aocs: ingo["Areas of competence"],
                                committees: ingo["Committes"],
                                geoReps: ingo["Geographical representation"]  
                            }
                        });
                        //console.log(factory.ingos);
                        defer.resolve(factory.ingos);
                        
                    })
                    .error(function(data, status) {
                        // messsage d'erreur
                    })
                    
            } else { // ingos déjà chargées 
                defer.resolve(factory.ingos); 
            }
            return defer.promise;
            
        },
        getIngo: function(id) {
            
            var defer = $q.defer();
            
            factory.getIngos().then(
                
                function(data) {
                   var ngo = _.findWhere(factory.ingos, {id:id}); 
                   defer.resolve(ngo);
                },
                function(error) {
                    
                }
            )
            return defer.promise;
            
        }
    }
    
    return factory;
    
}]);



