(function(){
    'use strict';
    
    angular
    .module('fjs.contact')
    .config(contactRouting);
    
    contactRouting.$inject = ['$routeProvider'];
    
    function contactRouting($routeProvider) {
        $routeProvider.when('/contact', {
           controller: 'ContactController',
           controllerAs: 'vm',
           templateUrl: 'app/contact/contact.html'
        });
    }
    
})();