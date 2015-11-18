ds la vue ingolistView.htmail

<div class="three columns">
  {{ ingo.Tel }}<br/>
  {{ ingo.Fax }}<br/>
  <span ng-bind-html="ingo.Website | website"></span>
  <a href="mailto://{{ingo.Email}}">{{ ingo.Email }}</a>

pour le ng-bind-html
  - dans index.html :

    <script src="js/lib/angular-sanitize.min.js"></script>
  -  dans les dépendances, plus le déclarer dans app.js:

    var app = angular.module('ingoApp', ['ingoControllers', 'ngRoute', 'ngSanitize']);

- ajout du filtre website dans app.js :

    /* filtesr */
    app.filter('website',function(){
     return function(input){  // closure
       var result="";
       if (input.indexOf('http://') == -1)
          result = 'http://' + input ;
       else result = input;
       return '<a href="' + result + '">'+input+'</a>';
     }

pour selectionner uniquement un champ du tableau :
  <input type="text" ng-model="txtSearch.Email"/>
  
