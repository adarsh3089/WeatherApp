'use strict';

/**
 * @ngdoc overview
 * @name greatApp
 * @description
 * # greatApp
 *
 * Main module of the application.
 */
angular
  .module('weatherApp', [
    'ui.router','ngResource'
    ])
  .config(function ($urlRouterProvider,$stateProvider,$sceDelegateProvider) {
   
    $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('http://api.openweathermap.org/data/2.5/forecast/daily')]);

    
    $urlRouterProvider.otherwise('/views/main');
    
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
      })
    
      .state('forecast', {
        url: '/forecast',
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl',
        controllerAs: 'forecast',
      })
    
      .state('forecast-rp',{
        url: '/forecast/:days',
        templateUrl: 'views/forecast.html',
        controller: 'ForecastCtrl',
        controllerAs: 'forecast',
    });
         
  });

angular.module('weatherApp')
  .service('cityService',function(){
        this.city = "Bangalore, India";
    })