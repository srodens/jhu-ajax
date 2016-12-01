(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://tranquil-sierra-71777.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
