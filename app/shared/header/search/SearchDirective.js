;(function () {
    'use strict';

    angular.module('ReadApp').directive('chSearch', ['SearchService', function(SearchService) {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/search/SearchView.html',
            link: function (scope) {
                MenuService.success(function (data) {
                    scope.menus = data.menus;
                });
            }
        };
    }]);
}());
