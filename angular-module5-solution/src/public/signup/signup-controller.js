(function () {
  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService) {
    var $ctrl = this;

    $ctrl.submit = function () {
      $ctrl.successful = false;
      $ctrl.noMenuItem = false;

      var promise = MenuService.getMyItem($ctrl.user.menushortname);

      promise.then(function (response) {
        $ctrl.successful = true;
        $ctrl.user.favname = response.data.name;
        $ctrl.user.favdesc = response.data.description;
        MenuService.setInfo($ctrl.user);

      })
      .catch(function (error) {
        $ctrl.successful = false;
        $ctrl.noMenuItem = true;

      })

    };

  }


})();
