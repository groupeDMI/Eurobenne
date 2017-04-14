(function(){
    'use strict';
    
    angular
    .module('fjs.home')
    .controller('HomeController', homeController);
    
    function homeController($filter) {
        var vm = this;
        
        vm.icons = [
            {
                title: 'Production',
                text: 'Une production de 1000 Bennes par an en 2x8 et jusqu\'à 1500 Bennes en 3x8.',
                img: 'fa fa-cogs fa-5x'
            },
            {
                title: 'Atelier',
                text: 'Un atelier de 4500m² avec une cabine de peinture de 100 m² aux normes de sécurités.',
                img: 'fa fa-industry fa-5x'
            },
            {
                title: 'Livraison',
                text: 'La livraison et la mise en place par nos soins avec notre camion Ampliroll, jusque chez vos clients.',
                img: 'fa fa-truck fa-5x'
            }
        ];
        
    }
    
})();