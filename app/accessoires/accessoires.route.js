(function(){
    'use strict';
    
    angular
    .module('fjs.accessoires')
    .config(accessoiresRouting);
    
    accessoiresRouting.$inject = ['$routeProvider'];
    
    function accessoiresRouting($routeProvider) {
        $routeProvider.when('/accessoires', {
           controller: 'AccessoiresController',
           controllerAs: 'vm',
           templateUrl: 'app/accessoires/accessoires.html'
        });
    }
    
})();