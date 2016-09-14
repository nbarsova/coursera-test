(function () {
'use strict';

angular.module ('LunchApp', []).controller ('LunchController', LunchController);

  LunchController.$inject=['$scope'];

  function LunchController ($scope) {
    $scope.lunchContents = '';
    $scope.lunchMessage="";

    $scope.checkLunch=function () {
      if ($scope.lunchContents=="") {
        $scope.lunchMessage="Please enter data first!";
      } else {
      var lunchArray = $scope.lunchContents.split(',');
      if (lunchArray.length>3) $scope.lunchMessage="Too much!"
      else $scope.lunchMessage="Enjoy yourself!";
    }
  }
  };
})();
