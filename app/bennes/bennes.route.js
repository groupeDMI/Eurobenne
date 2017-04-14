(function(){
    'use strict';
    
    angular
    .module('fjs.bennes')
    .config(bennesRouting);
    
    bennesRouting.$inject = ['$routeProvider'];
    
    function bennesRouting($routeProvider) {
        $routeProvider.when('/bennes', {
           controller: 'BennesController',
           controllerAs: 'vm',
           templateUrl: 'app/bennes/bennes.html'
        });
    }
    
})();