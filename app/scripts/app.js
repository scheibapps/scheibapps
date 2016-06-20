'use strict';

/**
 * @ngdoc overview
 * @name scheibappsApp
 * @description
 * # scheibappsApp
 *
 * Main module of the application.
 */
angular
  .module('scheibappsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
