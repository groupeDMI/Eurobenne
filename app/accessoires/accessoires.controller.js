(function(){
    'use strict';
    
    angular
    .module('fjs.accessoires')
    .controller('AccessoiresController', accessoiresController);
    
    accessoiresController.$inject = ['accessoires'];

    function accessoiresController(accessoires) {
        var vm = this;
        
        vm.access = accessoires.getAccess();
        vm.search;
        vm.accessActive;
        $(document).ready(function(){
          // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
          $('.modal').modal();
        });
    }
    
})();