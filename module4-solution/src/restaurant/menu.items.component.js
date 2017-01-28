(function () {
'use strict';

angular.module('MenuApp')
.component('menuItemsList', {
  templateUrl: 'src/restaurant/templates/menu.items.list.template.html',
  bindings: {
     items: '<'
  }
});

})();
