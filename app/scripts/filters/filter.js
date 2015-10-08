angular.module('SiteFilters')
  .filter('deleteFlag', function () {
    'use strict';
    return function (booleanString) {
      if (booleanString && booleanString == 1) {
        return 'Yes'
      } else {
        return 'No';
      }
    };
  });
