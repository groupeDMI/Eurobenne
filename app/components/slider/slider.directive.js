(function(){
    'use strict';
    
    angular
    .module('fjs.components')
    .directive('slider', sliderDefinition);
    
    function sliderDefinition() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/slider/slider.html',
            scope: {
                text: '=',
                type: '='
            },
            controller: sliderDirectiveController,
            controllerAs: 'vm',
            bindToController: true
        };
    }
    
    function sliderDirectiveController() {
        var vm = this;

        //init the slider
        $('.carousel.carousel-slider').carousel({fullWidth: true});
        
        setInterval(function() {
            $('.carousel').carousel('next');
        }, 5000);

    }
    
})();