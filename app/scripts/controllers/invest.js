'use strict';

/**
 * # HomeCtrl
 */
Site.controller('InvestCtrl', ['$scope', 'AuthSrv', '$state', '$location', function ($scope, AuthSrv, $state, $location) {

  $scope.currentTab = 1;// 1:��Ʒ 2:ɢ�� 3:ծȨת��

  $scope.setTab = function(idx) {
      $scope.currentTab = idx;
  };

    $scope.isShowCal = false;

    $scope.toggleCal = function() {
        $scope.isShowCal = !$scope.isShowCal;
    }

}]);
