(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
var signup = this;
signup.menuItemExists = true;

 signup.submit = function () {
  var promise = SignUpService.getMenuItem(signup.fav);

   promise.then(function (response) {
     signup.menuItemExists = true;

     SignUpService.setFistName(signup.firstname);
     SignUpService.setLastName(signup.lastname);
     SignUpService.setEmail(signup.email);
     SignUpService.setPhone(signup.phone);
     SignUpService.setFav(response.data);
     SignUpService.complete();
     signup.completed = true;
   }).catch(function (error) {
     console.log("Error "+SignUpService.isCompleted());
     signup.menuItemExists = false;
     signup.completed = false;
   });
};
}
})();
