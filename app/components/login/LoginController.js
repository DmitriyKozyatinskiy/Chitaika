;(function () {
    'use strict';

    angular.module('ReadApp')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/login', {
                templateUrl: 'app/components/login/LoginView.html',
                controller: 'AuthController',
                access: {
                    requiresLogin: false
                }
            });
        }]);
}());