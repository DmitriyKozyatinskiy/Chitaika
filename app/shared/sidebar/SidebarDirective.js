;(function () {
    'use strict';

    angular.module('ReadApp').directive('chSidebar', [function() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/sidebar/SidebarView.html',
            scope: {
                user: '='
            }
            //controller: ['$rootScope', '$scope', 'AuthService', 'AUTH_EVENTS', function ($rootScope, $scope, AuthService, AUTH_EVENTS) {
            //    //$scope.isAuthed = AuthService.isAuthenticated();
            //    //$rootScope.$on(AUTH_EVENTS.authStatusChange, function () {
            //    //    $scope.isAuthed = AuthService.isAuthenticated();
            //    //});
            //}]
        };
    }]);
}());
