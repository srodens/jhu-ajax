(function () {

    angular.module('Data')
    .component('items', {
        templateUrl: 'templates/items-component.html',
        bindings: {
            items: '<'
        }
    })
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['MenuDataService', 'items', '$stateParams'];

    function ItemsController(MenuDataService, items, $stateParams) {
      var list = this;
      list.items = items.data.menu_items;
    };

})();
