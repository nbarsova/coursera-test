(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuService', MenuService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;

  list.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
}


NarrowItDownController.$inject = ['MenuService'];
function NarrowItDownController(MenuService) {
  var menu = this;
  menu.searchTerm = "";
  menu.found = [];

  this.narrowItDown = function ()
  {
    if (menu.searchTerm !="")
    {
    console.log(menu.searchTerm);
    var promise = MenuService.getMenuItems();

    promise.then(function (response) {
      menu.found = [];
      for (var i=0; i<response.data.menu_items.length; i++)
      {
        if (response.data.menu_items[i].description. indexOf(menu.searchTerm.toLowerCase())!=-1)
        {
          menu.found.push(response.data.menu_items[i]);
        }
      }
      console.log(menu.found.length + " total items");


    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  } else {
    menu.found = [];
  }
  };

  this.remove = function (index)
  {
    console.log("Removing " + index);
    this.found.splice(index, 1);
  };
}



MenuService.$inject = ['$http', 'ApiBasePath'];
function MenuService($http, ApiBasePath) {
  var service = this;

  service.getMenuItems = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    });

    return response;
  };

}

})();
