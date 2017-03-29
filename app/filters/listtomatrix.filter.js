/**
 * Filter list to matrix : split array into matrix.
 * This allow users to set row each n object.
 * @memberOf Filters
 */
(function () {
    
    'use strict';
    
    angular
    .module('fjs.filters')
    .filter('listToMatrix', listToMatrixFilter);
    
    /**
     * @name listToMatrix
     * @memberOf Filters
     */
    function listToMatrixFilter () {
      function listToMatrix(list, elementsPerSubArray) {
        var matrix = [], i, k;
        for (i = 0, k = -1; i < list.length; i++) {
          if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
          }
          matrix[k].push(list[i]);
        }
        return matrix;
      }
      return function(list, elementsPerSubArray) {
        return listToMatrix(list, elementsPerSubArray);
      };
    }
    
})();