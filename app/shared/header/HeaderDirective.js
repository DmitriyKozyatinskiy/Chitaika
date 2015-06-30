;(function () {
    'use strict';

    angular.module('ReadApp').directive('chHeader', ['MenuService', function(MenuService) {
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
