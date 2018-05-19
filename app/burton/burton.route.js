(function(){
    'use strict';
    
    angular
    .module('fjs.burton')
    .config(burtonRouting);
    
    burtonRouting.$inject = ['$routeProvider'];
    
    function burtonRouting($routeProvider) {
        $routeProvider.when('/burton-steel', {
           controller: 'BurtonController',
           controllerAs: 'vm',
           templateUrl: 'app/burton/burton.html'
        });
    }
    
})();