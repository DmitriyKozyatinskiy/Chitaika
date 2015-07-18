;(function () {
    'use strict';

    angular.module('underscore', []).factory('_', ['$window', function() {
        return $window._;
    }]);

    angular.module('ReadApp', ['ngRoute', 'underscore'])
        .run(['$rootScope', 'AUTH_EVENTS', 'AuthService', function ($rootScope, AUTH_EVENTS, AuthService) {
            $rootScope.currentUser = null;
            $rootScope.setCurrentUser = function (user) {
                $rootScope.currentUser = user;
            };

            $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
                $rootScope.currentUser = null;
            });

            $rootScope.$on('$routeChangeStart', function (event, next) {
                var isAllowed;

                try {
                    isAllowed = !next.$$route.access.requiresLogin || AuthService.isAuthenticated();
                } catch (e) {
                    isAllowed = true;
                }

                if (!isAllowed) {
                    event.preventDefault();
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            });
        }]);
}());