(function () {
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['userInfo','ApiPath'];
  function InfoController(userInfo,ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
    $ctrl.userInfo = userInfo;
  }

})();
