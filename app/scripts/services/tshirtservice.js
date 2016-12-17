'use strict';

/**
 * @ngdoc service
 * @name angularPrettyUrlApp.tshirtService
 * @description
 * # tshirtService
 * Factory in the angularPrettyUrlApp.
 */
angular.module('angularPrettyUrlApp')
  .factory('tshirtService', function ($http, $q) {
    // Service logic
    // ...
    
    // Public API here
    return {
      getTshirts: function () {
        var deferred = $q.defer();

         $http.get('/tshirts').
         success(function(data, status, headers, config) {
              console.log('success ' + JSON.stringify(data));
              deferred.resolve(data);
          }).
          error(function(data, status, headers, config) {
              console.log('error ' + JSON.stringify(data)); 
              deferred.reject(data);
          });
         
         return deferred.promise;
      
      },
      deleteTshirt: function (id) {
        var deferred = $q.defer();

         $http.delete('/tshirt/' + id).
         success(function(data, status, headers, config) {
              console.log('delete success ' + JSON.stringify(data));
              deferred.resolve(data);
          }).
          error(function(data, status, headers, config) {
              console.log('delete error ' + JSON.stringify(data)); 
              deferred.reject(data);
          });
         
         return deferred.promise;
      
      }
    };
  });
