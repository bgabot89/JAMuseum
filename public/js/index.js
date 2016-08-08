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
      { image: '/static/images/internment.png', description: 'Image 00'},
      { image: '/static/images/Tule_Lake.jpg', description: 'Image 01'},
      { image: '/static/images/Heart_Mountain.png', description: 'Image 02'}
    ];
    //creates an array of titles for each slide
      $scope.titles = [
        {name: 'Life in the Internments', id: 'internment-title'},
        {name: 'TULE', name2: 'LAKE', id: 'tule-title', id2:'lake-title'},
        {name: 'HEART', name2: 'MOUNTAIN', id: 'heart-title', id2:'mountain-title'},
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
     $scope.message = 'Something Something!';
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
