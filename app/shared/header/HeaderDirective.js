angular.module('ReadApp').directive('chHeader', ['MenuService', function(MenuService) {
    return {
        restrict: 'E',
        link: function (scope) {
            MenuService.success(function (data) {
                scope.menus = data.menus;
            });
        },
        templateUrl: 'shared/header/HeaderView.html'
    };
}]);