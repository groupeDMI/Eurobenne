(function(){
    'use strict';
    
    angular
    .module('fjs.components')
    .directive('map', mapDefinition);
    
    function mapDefinition() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/map/map.html',
            scope: {
                text: '=',
                type: '='
            },
            controller: mapDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    
    function mapDirectiveController() {
        var vm = this;

    }
    
})();