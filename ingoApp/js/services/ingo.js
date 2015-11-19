app.factory('ingoFactory', function(){
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

  var committees = [
    'Social Cohesion and Global Challenges, Education and Culture',
    'Democracy',
    'Human Rights'
  ];

  var geoReps = [
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

  var factory = {
    aocs: aocs,
    committees: committees,
    geoReps: geoReps
  };

  return factory;
});

app.factory('ingoDataFactory', ['$http', '$q', function($http, $q){
  var factory = {
    ingos: false,
    getIngos: function(){
        var defer = $q.defer();
        if(!factory.ingos){
        $http.get('js/ngos.json')
          .success(function(data){
            // pour _.map voir underscore.js qui permet de faire plein de chose
            factory.ingos = _.map(data, function(ingo){
              return{
                nameEn: ingo["Name (english)"],
                acronymEn: ingo["Acronym (english)"],
                nameFr: ingo["Name (french)"],
                acronymFr: ingo["Acronym (French)"],
                street: ingo.Street,
                postCode: ingo.PostCode,
                town: ingo.Town,
                country: ingo.Country,
                tel: ingo.Tel,
                fax: ingo.Fax,
                website: ingo.Website,
                email: ingo.Email,
                aocs: ingo["Areas of competence"],
                committees: ingo.Committes,
                geoReps: ingo["Geographical representation"]
              };
            });
            defer.resolve(factory.ingos);
          })
        .error(function(data, status){
          alert('Impossible de charger les données (erreur ' + status + ')');
        });
      }else{
        // si factory.ingos n'est pas false ->contient des données
        return factory.ingos;
      }
      return defer.promise;
    },
    getIngo: function(id){
      return null;
    }
  };

  return factory;
}]);
