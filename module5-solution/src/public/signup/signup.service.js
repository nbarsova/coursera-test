(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;
  service.infoCompleted = false;

  service.setFistName = function (firstName)
  {
    service.firstName = firstName;
  };

  service.getFirstName = function ()
  {
    return service.firstName;
  }

  service.setLastName = function (lastName)
  {
    service.lastName = lastName;
  };

  service.getLastName = function ()
  {
    return service.lastName;
  }

  service.setEmail = function (email)
  {
    service.email = email;
  };

  service.getEmail = function ()
  {
    return service.email;
  }

  service.setFav = function (fav)
  {
    service.fav = fav;
  };

  service.getFav = function ()
  {
    return service.fav;
  }

  service.complete = function ()
  {
    console.log(service.infoCompleted);
    service.infoCompleted = true;
    console.log(service.infoCompleted);
  }

  service.isCompleted = function ()
  {
    console.log(service.infoCompleted);
    return service.infoCompleted;
  }

  service.getMenuItem = function (itemShortName) {
      console.log("Getting menu item "+itemShortName);
      var response =  $http.get(ApiPath + '/menu_items/'+itemShortName+".json");
      return response;
    };
}
})();
