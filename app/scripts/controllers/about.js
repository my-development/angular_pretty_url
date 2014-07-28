'use strict';

/**
 * @ngdoc function
 * @name angularPrettyUrlApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPrettyUrlApp
 */
angular.module('angularPrettyUrlApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
