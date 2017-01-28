(function () {
'use strict';

angular.module('MenuApp')
.service('MenuService', MenuService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuService.$inject = ['$http', 'ApiBasePath']
function MenuService($http, ApiBasePath) {
  var service = this;

  service.getCategories = function () {
    console.log("Got inside getCategories");
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json"),
    });

    return response;
  };

service.getItemsForCategory = function (categoryShortName) {
  console.log("Got inside getItemsForCategory for: " + categoryShortName);
  var response = $http({
    method: "GET",
    url: (ApiBasePath + "/menu_items.json?category="+categoryShortName),
  });

  return response;
  };
}

})();
