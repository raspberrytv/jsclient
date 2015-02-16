var raspberryApp = angular.module('raspberryApp', ['ui.router']);

raspberryApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    })
    .state('youtube', {
      url: "/youtube",
      templateUrl: "templates/youtube.html"
    });

});
