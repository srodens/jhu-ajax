(function () {

    angular.module('Data')
    .component('categories', {
        templateUrl: 'templates/categories-component.html',
        bindings: {
            items: '<'
        }
    })
    .controller('CatergoriesController', CatergoriesController);

      CatergoriesController.$inject = ['MenuDataService', 'items'];
        function CatergoriesController(MenuDataService, items) {
          var list = this;
          list.items = items.data;

        }

})();
