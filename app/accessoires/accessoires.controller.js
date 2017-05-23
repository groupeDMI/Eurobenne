class accessoiresController {
    constructor(accessoires) {
        this.accessoires = accessoires.getAccess();
        this.search;
        this.activeAccessoire;

        this.$onInit();
    }

    $onInit() {
        $(document).ready(function(){
          // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
          $('.modal').modal();
        }); 
    }


}


angular
.module('fjs.accessoires')
.controller('AccessoiresController', accessoiresController);

//accessoiresController.$inject = ['accessoires'];