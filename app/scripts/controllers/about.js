'use strict';

/**
 * # StockCtrl
 */
Site.controller('AboutCtrl', ['$scope', 'AuthSrv', '$state', '$location', function ($scope, AuthSrv, $state, $location) {

    var path = $location.path();

    // /about-stock
    path = path.substr(1);
    $scope.nav = path;
    $scope.setChannel = function(idx) {
        switch (idx) {
            case 1:
                $scope.nav = 'about';
                break;
            case 2:
                $scope.nav = 'about-stock';
                break;
            case 3:
                $scope.nav = 'about-secure';
                break;
            case 4:
                $scope.nav = 'about-media';
                break;
            case 5:
                $scope.nav = 'about-jd';
                break;
            case 6:
                $scope.nav = 'about-contact';
                break;
            default :
                $scope.nav = 'about';
        }
    };

}]);
