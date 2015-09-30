'use strict';

/**
 * # AccountCtrl
 */
Site.controller('AccountCtrl', ['$scope', 'AuthSrv', '$state', '$location', function ($scope, AuthSrv, $state, $location) {

    var path = $location.path();

    // /about-stock
    path = path.substr(1);
    $scope.nav = path;
    $scope.setChannel = function(idx) {
        switch (idx) {
            case 1:
                $scope.nav = 'account';
                break;
            case 2:
                $scope.nav = 'account-recharge';
                break;
            case 3:
                $scope.nav = 'account-cash';
                break;
            case 4:
                $scope.nav = 'account-invest';
                break;
            case 5:
                $scope.nav = 'account-trade';
                break;
            case 6:
                $scope.nav = 'account-order';
                break;
            case 7:
                $scope.nav = 'account-base';
                break;
            case 8:
                $scope.nav = 'account-bank';
                break;
            case 9:
                $scope.nav = 'account-promotion';
                break;
            case 10:
                $scope.nav = 'account-friend';
                break;
            default :
                $scope.nav = 'account';
        }
    };

    $scope.currentTab = 1;// 1:产品 2:散标 3:债权转让

    $scope.setTab = function(idx) {
        $scope.currentTab = idx;
    };

}]);
