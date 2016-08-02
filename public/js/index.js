// create the module and name it scotchApp
 var app = angular.module('myApp', ['ngRoute']);

 //configure routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    //route for home page
    .when('/', {
      templateUrl: '../static/partials/home.html',
      controller: 'mainController'
    })
    //route for tule partial
    .when('/tule', {
      templateUrl: '../static/partials/tule.html',
      controller: 'tuleController'
    })
    //use the HTML5 History API, will remove # from url
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
  });


  // create the controller and inject Angular's $scope
  app.controller('mainController', function($scope) {

      // create a message to display in our view
      $scope.message = 'Something Something!';
  });

 // create the controller and inject Angular's $scope
 app.controller('tuleController', function($scope) {

     // create a message to display in our view
     $scope.message = 'Something Something!';
 });
