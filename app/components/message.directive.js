(function(){
    'use strict';
    
    angular
    .module('fjs.components')
    .directive('message', messageDirectiveDefinition);
    
    function messageDirectiveDefinition() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/message.html',
            scope: {
                text: '=',
                type: '='
            },
            controller: messageDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    
    function messageDirectiveController() {
        var vm = this;
    }
    
})();