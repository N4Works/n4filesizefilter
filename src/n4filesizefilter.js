;
(function(ng) {
  "use strict";

  ng
    .module('n4FileSizeFilter', [])
    .filter('FileSize', [
      'numberFilter',
      function(numberFilter) {
        return function(bytes, precision) {
          if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) {
            return 0;
          }
          precision = precision || 1;
          var units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'],
            number = Math.floor(Math.log(bytes) / Math.log(1024));
          return numberFilter((bytes / Math.pow(1024, Math.floor(number))), precision) + ' ' + units[number];
        };
      }
    ]);
}(angular));
