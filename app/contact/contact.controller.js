class contactController {
    constructor($filter){
        this.$filter = $filter;
        this.contact = {};
        this.loading = false;

        this.$onInit();
    }

    $onInit() {
        $(document).ready(function(){
            $('.modal').modal();
        });
        emailjs.init({
            publicKey: 'EVJLqezBwf9nsoux0',
        });
    }

    send(){
        this.loading = true;

        emailjs.send("service_r05mq3p","template_v57ew7j", this.contact)
            .then(response => {
               console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
               $('#modal1').modal('open');
               this.loading = false;
            }, err => {
                console.log("FAILED. error=", err);
                this.loading = false;
            });
    }
}


angular
    .module('fjs.contact')
    .controller('ContactController', contactController);
