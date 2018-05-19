class CardController {
	$onInit () {
		if (angular.isUndefined(this.size)) {
			this.size = "small";
		}
	}
}

angular
    .module('fjs.components')
    .component('card', {
    	templateUrl: "app/components/card/card.html",
    	controller: CardController,
    	transclude: true,
    	bindings: {
    		size: "@?",
    		title: "@?"
    	}
    });