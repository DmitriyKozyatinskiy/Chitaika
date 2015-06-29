;(function () {
    'use strict';

    angular.module('ReadApp', [
        'ngRoute'
    ])
        .run(['$rootScope', 'AUTH_EVENTS', 'AuthService', function ($rootScope, AUTH_EVENTS, AuthService) {
            $rootScope.currentUser = null;
            $rootScope.setCurrentUser = function (user) {
                $rootScope.currentUser = user;
            };

            $rootScope.$on('$routeChangeStart', function (event, next) {
                var isAllowed = !next.$$route.access.requiresLogin || AuthService.isAuthenticated();

                if (!isAllowed) {
                    event.preventDefault();
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            });
        }]);
}());