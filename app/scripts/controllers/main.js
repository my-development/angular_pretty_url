'use strict';

/**
 * @ngdoc function
 * @name angularPrettyUrlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPrettyUrlApp
 */
angular.module('angularPrettyUrlApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
