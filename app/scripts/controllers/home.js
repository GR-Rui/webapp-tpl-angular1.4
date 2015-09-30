'use strict';

/**
 * # HomeCtrl
 */
Site.controller('HomeCtrl', ['$scope', 'AuthSrv', '$state', '$location', function ($scope, AuthSrv, $state, $location) {

  $scope.loginDisabled = true;
  $scope.userMsg = undefined;
  $scope.passMsg = undefined;
  $scope.codeMsg = undefined;


}]);
