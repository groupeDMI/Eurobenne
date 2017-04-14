(function(){
    'use strict';
    
    angular
    .module('fjs.bennes')
    .controller('BennesController', bennesController);
    
    bennesController.$inject = ['bennes', '$rootScope'];

    function bennesController(bennes, $rootScope) {
        var vm = this;
        
        vm.search = $rootScope.search;

        vm.categories = bennes.getCategories();
        vm.bennes = bennes.getBennes();

        vm.selectCat = function(cat){
            vm.search = cat;
        }
        
        vm.benneActive;
        $(document).ready(function(){
          // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
          $('.modal').modal();
        });
          
    }
    
})();