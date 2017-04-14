(function(){
    'use strict';
    
    angular
    .module('fjs.home')
    .config(homeRouting);
    
    homeRouting.$inject = ['$routeProvider'];
    
    function homeRouting($routeProvider) {
        $routeProvider.when('/', {
           controller: 'HomeController',
           controllerAs: 'vm',
           templateUrl: 'app/home/home.html'
        });
    }
    
})();