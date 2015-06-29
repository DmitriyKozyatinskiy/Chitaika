;(function () {
    'use strict';

    angular.module('ReadApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
    }])
        .run(['$rootScope', 'AUTH_EVENTS', 'LoginService', function ($rootScope, AUTH_EVENTS, LoginService) {
            $rootScope.currentUser = null;
            $rootScope.setCurrentUser = function (user) {
                $rootScope.currentUser = user;
            };

            $rootScope.$on('$routeChangeStart', function (event, next) {
                var isAllowed = !next.$$route.access.requiresLogin || LoginService.isAuthenticated();

                if (!isAllowed) {
                    event.preventDefault();
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                }
            });
        }]);
}());