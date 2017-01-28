(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  var menu = this;
  menu.items = menuItems.data.menu_items;
  console.log (menu.items);
}

})();
