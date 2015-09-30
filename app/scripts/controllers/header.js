'use strict';

/**
 * # HomeCtrl
 */
Site.controller('HeaderCtrl', ['$scope', 'AuthSrv', '$state', '$location', function ($scope, AuthSrv, $state, $location) {

    var path = $location.path();

    // /home-test
    path = path.substr(1);
    var pos = path.indexOf('-');
    if (pos > 0) {
        $scope.channel = path.substring(0,pos);
    }else{
        $scope.channel = path;
    }
    $scope.setChannel = function(idx) {
        switch (idx) {
            case 1:
                $scope.channel = 'home';
                break;
            case 2:
                $scope.channel = 'invest';
                break;
            case 3:
                $scope.channel = 'about';
                break;
            case 4:
                $scope.channel = 'account';
                break;
            default :
                $scope.channel = 'home';
        }
    };


}]);
