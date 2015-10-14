/**
 * @ngdoc overview
 * @name webapp
 * @description
 * # webapp
 *
 * Main module of the application.
 */
var SiteFilters = angular.module('SiteFilters', []);
var Site = angular.module('Site', [
  'ngAnimate',
  'ngRoute',
  'ngSanitize',
  'ngCookies',
  'ngTouch',
  'ui.router',
  'SiteFilters'
]);

Site.config( [ '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
  "use strict";
  $stateProvider
    .state('invest', {url: '/invest', templateUrl: 'views/invest.html', controller: 'InvestCtrl'})
    .state('login', {url: '/login', templateUrl: 'views/login.html', controller: 'HomeCtrl'})
    .state('register', {url: '/register', templateUrl: 'views/register.html', controller: 'HomeCtrl'})
    .state('home', {url: '/home', templateUrl: 'views/home.html', controller: 'HomeCtrl'});
  $urlRouterProvider.otherwise('/home');
  if (window.history && window.history.pushState) {
    $locationProvider.html5Mode(true).hashPrefix('!');
  }
}]);
