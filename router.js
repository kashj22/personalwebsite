var portApp = angular.module("portfolioApp", ["ui.router"]);

portApp.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/");
  // $locationProvider.html5Mode(true);

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "partials/home.html"
    })

    .state("about", {
      url: "/about",
      templateUrl: "partials/about.html"
    })

    .state("portfolio", {
      url: "/portfolio",
      templateUrl: "partials/portfolio.html"
    })

    .state("contact", {
      url: "/contact",
      templateUrl: "partials/contact.html"
    });
}]); 