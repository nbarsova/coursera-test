(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignUpService','ApiPath'];
  function InfoController(SignUpService, ApiPath) {
    var info = this;
    info.basePath = ApiPath;

    info.getFirstName = function () {
      return SignUpService.getFirstName();
    }

    info.getLastName = function () {
      return SignUpService.getLastName();
    }

    info.getEmail = function () {
      return SignUpService.getEmail();
    }

    info.getFav = function ()
    {
      return SignUpService.getFav();
    }

    info.completed = function ()
    {
      return SignUpService.isCompleted();
    }
  }
})();
