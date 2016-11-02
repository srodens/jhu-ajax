(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message ="";


  $scope.checkIfTooMuch = function () {
    if ($scope.lunchMenu == ""){
      $scope.message="Please enter data first.";
    }
    else{

      var numLunchMenu = $scope.lunchMenu.split(",").length;
      if (numLunchMenu <= 3){
        $scope.message="Enjoy!";
      }
      else if (numLunchMenu >3) {
        $scope.message="Too Much!";
      }
    }
  };


}

})();
