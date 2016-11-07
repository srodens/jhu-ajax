(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuy.moveToBought = function (itemIndex) {
    ShoppingListCheckOffService.moveToBought(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  alreadyBought.moveToBuy = function (itemIndex) {
    ShoppingListCheckOffService.moveToBuy(itemIndex);
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {name:"chips",quantity:3},
    {name:"apples",quantity:7},
    {name:"peaches",quantity:1},
    {name:"pears",quantity:9},
    {name:"bannanas",quantity:15},
  ];
  var boughtItems = [];


  service.moveToBought = function (itemIndex) {

    var item = {
      name: toBuyItems[itemIndex].name,
      quantity: toBuyItems[itemIndex].quantity
    };
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };


  service.getToBuyItems = function () {
    return toBuyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}


})();
