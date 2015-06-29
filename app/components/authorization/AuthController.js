;(function () {
    'use strict';

    angular.module('ReadApp').controller('AuthController',
        ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
            $scope.credentials = {
                email: '',
                password: ''
            };

            $scope.login = function (credentials) {
                AuthService.login(credentials).then(function (user) {
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    $scope.setCurrentUser(user);
                }, function () {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            };
        }]);
}());