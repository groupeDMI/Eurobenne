class bennesController {
    constructor(bennes, $rootScope) {
        this.search = $rootScope.search;
        this.bennes = bennes.getBennes();
        this.categories = bennes.getCategories();
        this.benneActive;

        this.$onInit();
    }

    $onInit() {
        $(document).ready(function(){
            $('.modal').modal();
        });
    }

    selectCat(cat) {
        this.search = cat;
    }
}


angular
.module('fjs.bennes')
.controller('BennesController', bennesController);

//bennesController.$inject = ['bennes', '$rootScope'];