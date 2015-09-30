'use strict';

/**
 * # HomeCtrl
 */
Site.controller('InvestCtrl', ['$scope', 'AuthSrv', '$state', '$location', function ($scope, AuthSrv, $state, $location) {

  $scope.currentTab = 1;// 1:产品 2:散标 3:债权转让

  $scope.setTab = function(idx) {
      $scope.currentTab = idx;
  };

    $scope.isShowCal = false;

    $scope.toggleCal = function() {
        $scope.isShowCal = !$scope.isShowCal;
    }

}]);
