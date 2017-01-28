(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/restaurant/templates/categoriesList.template.html',
  bindings: {
    items: '<'
  }
});

})();
