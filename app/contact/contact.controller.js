(function(){
    'use strict';
    
    angular
    .module('fjs.contact')
    .controller('ContactController', contactController);
    
    function contactController($filter) {
        var vm = this;
        //initialisations
        $('.modal').modal();
        emailjs.init("user_bohF04q3pAPOijmAfMD5u");

        //stockage des informations du formulaire de contact
        vm.contact = {};
        
        /*
         * Envoie du formulaire
         */
        vm.send = function(){
        	console.log(vm.contact);
        	// parameters: service_id, template_id, template_parameters
			emailjs.send("yandex","eurobenne",vm.contact)
			.then(function(response) {
			   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
			   $('#modal1').modal('open');
			}, function(err) {
			   console.log("FAILED. error=", err);
			});
        	
        }
    }
    
})();