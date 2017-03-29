(function(){
  'use strict';
  
  angular
  .module('fjs.components')
  .directive('sideshortcut', sideshortcutDefinition);
  
  function sideshortcutDefinition() {
      return {
          restrict: 'E',
          templateUrl: 'app/components/sideshortcut/sideshortcut.html',
          scope: {
              text: '=',
              type: '='
          },
          controller: sideshortcutDirectiveController,
          controllerAs: 'vm',
          bindToController: true
      };
  }
  
  sideshortcutDirectiveController.$inject = ['bennes', '$location', '$rootScope'];
  function sideshortcutDirectiveController(bennes, $location, $rootScope) {
    var vm = this;
    vm.categories = bennes.getCategories();

    vm.goCat = function(cat){
      $rootScope.search = cat;
      $location.path('/bennes');
    }
    
    vm.resetSearch = function(){
      $rootScope.search="";
    }
  }
    
})();