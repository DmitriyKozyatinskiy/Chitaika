;(function () {
    'use strict';

    angular.module('ReadApp').controller('AuthController',
        ['AuthService', function (AuthService) {
            this.credentials = {
                email: '',
                password: ''
            };

            this.login = function (credentials) {
                AuthService.login(credentials);
            };

            this.logout = function () {
                AuthService.logout();
            };

            this.isAuthenticated = function () {
                return AuthService.isAuthenticated();
            };
        }]);
}());