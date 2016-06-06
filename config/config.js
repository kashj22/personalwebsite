var portapp = angular.module("portfolioApp", ["ngResource", "ngRoute"]);

portapp.config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider.when("/home", {
    templateUrl: "../partials/home.html",
    controller: "homeCtrl"
  });

  $routeProvider.when("/about", {
    templateUrl: "../partials/about.html",
    controller: "aboutCtrl"
  });

  $routeProvider.when("/portfolio", {
    templateUrl: "../partials/portfolio.html",
    controller: "portfolioCtrl"
  });

  $routeProvider.when("/contact", {
    templateUrl: "../partials/contact.html",
    controller: "contactCtrl"
  });

  $routeProvider.otherwise({
    templateUrl: "../partials/home.html",
    controller: "homeCtrl"
  });

});


portapp.controller("homeCtrl", function($scope, $location) {
  $location.path("/");
});

portapp.controller("aboutCtrl", function($scope, $location) {
  $location.path("/about");
});

portapp.controller("portfolioCtrl", function($scope, $location) {
  $location.path("/portfolio");
});

portapp.controller("contactCtrl", function($scope, $location) {
  $location.path("/contact");
});







