(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItemsList.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      bindToController: false,
      controllerAs: 'menu'
    };
      //  controllerAs: 'foundItems',



    return ddo;
  }
  function FoundItemsDirectiveController() {
    var menu = this;

    return true;
  }




  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.foundItems=[];

    menu.matchMenuItem = function (searchTerm) {
      if (searchTerm){
        menu.foundItems= MenuSearchService.getMatchedMenuItems(searchTerm);
      }
    };

    menu.removeItem= function (index) {
      menu.foundItems.splice(index,1);

    };

  }


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      var foundItems =[];
      $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        // params: {
        //   category: shortName
        // }
      }).then(function(response){

        for(var i =0; i<response.data.menu_items.length; i++){
          if (response.data.menu_items[i].description.match(searchTerm)){
            foundItems.push(response.data.menu_items[i]);
          }
        }

      });
      return foundItems;


    };

  }

})();
