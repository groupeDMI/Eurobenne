(function(){
    'use strict';
    
    angular
    .module('fjs.core')
    .config($locationProvider => $locationProvider.html5Mode(true))
    .run($rootScope => { $rootScope.search; })
    
})();