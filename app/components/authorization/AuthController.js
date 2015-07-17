;(function () {
    'use strict';

    angular.module('ReadApp').controller('AuthController',
        ['$rootScope', 'AUTH_EVENTS', 'AuthService', function ($rootScope, AUTH_EVENTS, AuthService) {
            this.credentials = {
                email: '',
                password: ''
            };

            this.login = function (credentials) {
                AuthService.login(credentials).then(function (user) {
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    $rootScope.setCurrentUser(user);
                }, function () {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            };

            this.logout = function () {
                AuthService.logout();
                /** @TODO move it to deferred */
                $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
            };

            this.isAuthed = function () {
                return AuthService.isAuthenticated();
            };
        }]);
}());