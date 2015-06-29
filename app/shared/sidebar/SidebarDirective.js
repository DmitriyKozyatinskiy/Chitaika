;(function () {
    'use strict';

    angular.module('ReadApp').directive('chSidebar', [function() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/sidebar/SidebarView.html'
        };
    }]);
}());
