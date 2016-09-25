(function () {
'use strict';

angular.module ('ShoppingListCheckOff', [])
.controller ('ToBuyShoppingController', ToBuyShoppingController)
.controller ('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController (ShoppingListCheckOffService)
{
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

  toBuyList.everythingBought = function () {
    return (toBuyList.items.length === 0);
  };
}

function AlreadyBoughtShoppingController (ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
  boughtList.nothingBought = function () {
    return (boughtList.items.length === 0); 
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
    {name: "cookies", quantity: "10 bags"},
    {name: "milk", quantity: "5 liters"},
    {name: "bread", quantity: "2 loaves"},
    {name: "cheese", quantity: "1 kilo"},
    {name:"sugar", quantity: "3 kilos"}
  ];

  //list of items already bought
  var boughtItems =[];

  // adds bought item to the list of bought items and removes it from shopping list
  service.buyItem = function (itemIndex)
  {
    var boughtItem = itemsToBuy[itemIndex];
    boughtItems.push(boughtItem);
    itemsToBuy.splice(itemIndex,1);
  }

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  }

  service.nothingBought = function () {
    console.log ("Bought items" + (boughtItems.length === 0));
    return (boughtItems.length === 0);
  }

  service.everythingBought = function ()
  {
    console.log ("To buy items" + (itemsToBuy.length))
    return (itemsToBuy.length === 0);
  }
}

})();
