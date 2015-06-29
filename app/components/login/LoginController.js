;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/login', {
                templateUrl: 'app/components/login/LoginView.html',
                controller: 'LoginController',
                access: {
                    requiresLogin: false
                }
            });
        }])

        .controller('LoginController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'LoginService', function ($scope, $rootScope, AUTH_EVENTS, LoginService) {
            $scope.credentials = {
                email: '',
                password: ''
            };

            $scope.login = function (credentials) {
                LoginService.login(credentials).then(function (user) {
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                    $scope.setCurrentUser(user);
                }, function () {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            };
        }]);
}());