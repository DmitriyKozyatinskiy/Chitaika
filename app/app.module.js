;(function () {
    'use strict';

    angular.module('underscore', []).factory('_', ['$window', function() {
        return $window._;
    }]);

    angular.module('ReadApp', ['ngRoute', 'underscore'])
        .run(['$rootScope', '$route', '$location', 'AUTH_EVENTS', 'AuthService', function ($rootScope, $route, $location, AUTH_EVENTS, AuthService) {
            $rootScope.currentUser = null;

            $rootScope.setCurrentUser = function (user) {
                $rootScope.currentUser = user;
            };

            $rootScope.$on(AUTH_EVENTS.logoutSuccess, function () {
                var requiresLogin = $route.current.$$route.access.requiresLogin;

                $rootScope.currentUser = null;

                if (requiresLogin) {
                    $location.path('/');
                }
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