// create the module and name it scotchApp
 var app = angular.module('myApp', []);

 // create the controller and inject Angular's $scope
 app.controller('mainController', function($scope) {

     // create a message to display in our view
     $scope.message = 'Something Something!';
 });
