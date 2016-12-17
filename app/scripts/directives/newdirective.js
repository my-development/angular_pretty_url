'use strict';

/**
 * @ngdoc directive
 * @name angularPrettyUrlApp.directive:newDirective
 * @description
 * # newDirective
 */
angular.module('angularPrettyUrlApp')
  .directive('newDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the newDirective directive');
      }
    };
  });
