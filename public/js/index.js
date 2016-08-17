// create the module and name it scotchApp
 var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

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
    //route for heart partial
    .when('/heart', {
      templateUrl: '../static/partials/heart.html',
      controller: 'heartController'
    })
    .when('/camps', {
      templateUrl: '../static/partials/camps.html',
      controller: 'campController'
    })
    .when('/contact', {
      templateUrl: '../static/partials/contact.html',
      controller: 'contactController'
    })

    //use the HTML5 History API, will remove # from url
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    })
  });


  // create the controller and inject Angular's $scope
  app.controller('mainController', function($scope) {
      // creates an array of images to display on our slides
      $scope.slides = [
      { image: '/static/images/Internment.png', description: 'Image 00'},
      { image: '/static/images/Tule_Lake.jpg', description: 'Image 01'},
      { image: '/static/images/Heart_Mountain.png', description: 'Image 02'}
    ];
    //creates an array of titles for each slide
      $scope.titles = [
        {name: 'Life in the Internments', id: 'internment-title'},
        {name: 'TULE', name2: 'LAKE', id: 'tule-title', id2:'lake-title'},
        {name: 'HEART', name2: 'MOUNTAIN', id: 'heart-title', id2:'mountain-title'},
      ];
      $scope.links = [
        {ref: '/camps'},
        {ref: '/tule'},
        {ref: '/heart'}
      ];

    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
        $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
        $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
        return $scope.currentIndex === index;
    };

    $scope.prevSlide = function() {
      $scope.direction = 'left';
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.nextSlide = function() {
      $scope.direction = 'right';
      $scope.currentIndex = ($scope.currentIndex > 0 ) ? --$scope.currentIndex : $scope.slides.length -1;
    };
});

 // create the controller and inject Angular's $scope
 app.controller('tuleController', function($scope) {

     // create a message to display in our view
     $scope.message = 'Tule Lake';
 });

 app.controller('heartController', function($scope) {

     // create a message to display in our view
     $scope.message = 'Heart Mountain';
 });

 //controller for contact, adding http to help with POST request
 app.controller('contactController', function($scope, $http) {
   //header
   //create a blank object to hold our form information
   // create a blank object to hold our form information
 			// $scope will allow this to pass between controller and view
 			$scope.formData = {};
 			// process the form
 			$scope.processForm = function() {
 				$http({
 			        method  : 'POST',
 			        url     : '../static/php/process.php',
 			        data    : $.param($scope.formData),  // pass in data as strings
 			        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 			    })
 			        .success(function(data) {
 			            console.log(data);
 			            if (!data.success) {
 			            	// if not successful, bind errors to error variables
 			                $scope.errorName = data.errors.name;
 			                $scope.errorSuperhero = data.errors.superheroAlias;
 			            } else {
 			            	// if successful, bind success message to message
 			                $scope.message = data.message;
                                         $scope.errorName = '';
 			                $scope.errorSuperhero = '';
 			            }
 			        });
 			};
   });


 app.controller('campController', function($scope) {

     // create a message to display in our view
     $scope.message = 'Camps';

     $scope.camps = [
       {name:'Tule Lake', url: '/static/images/tule_small.png', route: '/tule'},
       {name:'Heart Mountain', url: '/static/images/heart_small.png', route: '/heart'}
     ];
 });


 app.animation('.slide-animation', function () {
   return {
     addClass: function (element, className, done) {
       if (className == 'ng-hide') {
         TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
       }
       else {
         done();
       }
     },
     removeClass: function (element, className, done) {
       if (className == 'ng-hide') {
         element.removeClass('ng-hide');
         TweenMax.set(element, { left: element.parent().width() });
         TweenMax.to(element, 0.5, {left: 0, onComplete: done });
       }
       else {
         done();
       }
     }
   };
 });
