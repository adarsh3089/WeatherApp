'use strict';

/**
 * @ngdoc function
 * @name greatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the greatApp
 */
angular.module('weatherApp')

  .controller('MainCtrl',['$scope','cityService', function($scope,cityService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
    $scope.city = cityService.city;
    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    }) ;
   
  }])

   .controller('ForecastCtrl',['$scope','$resource','$stateParams','cityService', function ( $scope, $resource,$stateParams, cityService ) {
   
  $scope.city = cityService.city;
      
  $scope.days = $stateParams.days || '2';
      
  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{ get: { method: "JSONP" }});
     
  $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt:$scope.days ,appid:'a945f4bc06fe05298c2223db59fa29dc'});

  $scope.convertToCelcius = function(kelvin) {
      
      return Math.round(kelvin - 273);
  };
      
  $scope.convertToDate = function (dt) {
      return new Date(dt * 1000 );
  }
      
      
  }]);



