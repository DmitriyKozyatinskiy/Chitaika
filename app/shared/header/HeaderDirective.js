;(function () {
    'use strict';

    angular.module('ReadApp').directive('chHeader', ['MenuService', 'SearchService', function(MenuService, SearchService) {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/header/HeaderView.html',
            link: function (scope) {
                MenuService.success(function (data) {
                    scope.menus = data.menus;
                });
            }
        };
    }]);
}());
